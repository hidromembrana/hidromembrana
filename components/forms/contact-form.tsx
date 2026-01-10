"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useSendEmail } from "@/hooks/use-send-email"
import { ContactFormValues, contactFormSchema } from "@/lib/schemas/contact-schema"
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



import { useState } from "react"
import { Turnstile } from "@marsidev/react-turnstile"

export function ContactForm() {
    const { sendEmail, isSubmitting, isSuccess, reset } = useSendEmail()
    const [token, setToken] = useState<string | null>(null)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    async function onSubmit(values: ContactFormValues) {
        if (!token) {
            form.setError("root", { message: "Por favor completa el captcha." })
            return
        }
        const success = await sendEmail('contact', values, token)
        if (success) {
            form.reset()
            setToken(null) // Reset token on success
        }
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-muted/30 rounded-lg border border-border">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground mb-6">
                    Gracias por contactarnos. Te responderemos a la brevedad posible.
                </p>
                <Button onClick={reset} variant="outline">
                    Enviar otro mensaje
                </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu nombre" {...field} />
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
                                    <Input placeholder="nombre@ejemplo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Teléfono (Opcional)</FormLabel>
                            <FormControl>
                                <Input placeholder="+56 9 1234 5678" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mensaje</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-center">
                    <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                        onSuccess={(token) => setToken(token)}
                        onError={() => setToken(null)}
                        onExpire={() => setToken(null)}
                    />
                </div>

                {form.formState.errors.root && (
                    <p className="text-destructive text-sm text-center">{form.formState.errors.root.message}</p>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting || !token}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        "Enviar Mensaje"
                    )}
                </Button>
            </form>
        </Form>
    )
}
