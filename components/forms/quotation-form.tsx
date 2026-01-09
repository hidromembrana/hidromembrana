"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuoteCart } from "@/components/providers/quote-cart-provider"
import { useSendEmail } from "@/hooks/use-send-email"
import { QuotationFormValues, quotationFormSchema } from "@/lib/schemas/quotation-schema"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2 } from "lucide-react"

export function QuotationForm() {
    const { items, clearCart, contactInfo } = useQuoteCart()
    const { sendEmail, isSubmitting, isSuccess, reset } = useSendEmail()

    const form = useForm<QuotationFormValues>({
        resolver: zodResolver(quotationFormSchema),
        defaultValues: {
            name: contactInfo.name || "",
            company: "",
            email: contactInfo.email || "",
            phone: contactInfo.phone || "",
            location: "",
            details: "",
        },
    })

    async function onSubmit(values: QuotationFormValues) {
        if (items.length === 0) {
            form.setError("root", { message: "Debes agregar al menos un producto a la cotización." })
            return
        }

        const payload = {
            customer: values,
            items: items.map(item => ({
                productId: item.product.id,
                productName: item.product.title,
                quantity: item.quantity,
                config: item.config
            }))
        }

        const success = await sendEmail('quotation', payload)

        if (success) {
            clearCart()
            form.reset()
        } else {
            form.setError("root", { message: "Hubo un error al enviar la cotización. Inténtalo nuevamente." });
        }
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-card rounded-xl border shadow-sm animate-in fade-in-50">
                <div className="h-24 w-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">¡Solicitud Enviada!</h3>
                <p className="text-muted-foreground mb-8 max-w-lg text-lg">
                    Hemos recibido los detalles de tu cotización. Un especialista revisará los ítems solicitados y te contactará a la brevedad.
                </p>
                <Button onClick={reset} size="lg" className="w-full sm:w-auto">
                    Volver al Inicio
                </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 bg-card border rounded-lg shadow-sm">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre Completo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu nombre" {...field} readOnly={contactInfo.isSaved} className={contactInfo.isSaved ? "bg-muted" : ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Empresa (Opcional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre empresa" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="tu@email.com" {...field} readOnly={contactInfo.isSaved} className={contactInfo.isSaved ? "bg-muted" : ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Teléfono / WhatsApp</FormLabel>
                                <FormControl>
                                    <Input placeholder="+56 9 1234 5678" {...field} readOnly={contactInfo.isSaved} className={contactInfo.isSaved ? "bg-muted" : ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Location spans full width on mobile, half on desktop? Let's make it full width or half */}
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormLabel>Ubicación del Proyecto</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ciudad, Región" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Comentarios Adicionales</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Instrucciones especiales, dudas, etc..."
                                    className="min-h-[80px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {form.formState.errors.root && (
                    <p className="text-red-500 text-sm font-medium">{form.formState.errors.root.message}</p>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || items.length === 0}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        "Solicitar Cotización Final"
                    )}
                </Button>
            </form>
        </Form>
    )
}
