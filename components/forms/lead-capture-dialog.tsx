"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useQuoteCart } from "@/components/providers/quote-cart-provider"
import { useSendEmail } from "@/hooks/use-send-email"
import { LeadFormValues, leadSchema } from "@/lib/schemas/lead-schema"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"



interface LeadCaptureDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSuccess: () => void
}

export function LeadCaptureDialog({ open, onOpenChange, onSuccess }: LeadCaptureDialogProps) {
    const { saveContactInfo } = useQuoteCart()
    const { sendEmail, isSubmitting } = useSendEmail()

    const form = useForm<LeadFormValues>({
        resolver: zodResolver(leadSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    async function onSubmit(values: LeadFormValues) {
        // Persist locally immediately
        saveContactInfo({
            ...values,
            isSaved: true
        })

        // Send email (no need to block success on email failure for this one, as per previous logic)
        await sendEmail('lead', values)

        onSuccess()
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">Configura tu Cotización</DialogTitle>
                    <DialogDescription>
                        Para brindarte el mejor precio y asesoría técnica, indícanos a quién dirigir la cotización.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre o Empresa</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ej. Juan Pérez / Constructora Ltda." {...field} />
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
                                    <FormLabel>Correo Electrónico</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="contacto@empresa.com" {...field} />
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
                                        <Input type="tel" placeholder="+56 9 9876 5432" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter className="mt-4 pt-2">
                            <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? "Guardando..." : "Continuar a Configuración"}
                            </Button>
                        </DialogFooter>

                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                            <Lock className="w-3 h-3" />
                            <span>Tus datos están protegidos y no serán compartidos.</span>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
