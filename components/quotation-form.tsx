"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2, CheckCircle2, FileText } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    company: z.string().optional(),
    email: z.string().email("Email inválido"),
    phone: z.string().min(8, "Teléfono inválido"),

    productType: z.string().min(1, "Selecciona un producto"),
    dimensions: z.string().min(1, "Especifica las dimensiones aprox."),
    application: z.string().min(1, "Selecciona el uso principal"),
    location: z.string().min(1, "Indica la ubicación del proyecto"),

    details: z.string().optional(),
})

export function QuotationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            productType: "",
            dimensions: "",
            application: "",
            location: "",
            details: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Quotation Data:", values)
        setIsSubmitting(false)
        setIsSuccess(true)
        form.reset()
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-card rounded-xl border shadow-sm">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">¡Solicitud Recibida!</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                    Hemos recibido tu solicitud de cotización. Nuestro equipo técnico analizará tus requerimientos y te contactará en breve.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Nueva Cotización
                </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                {/* Sección: Datos de Contacto */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">1. Datos de Contacto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre Completo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Tu nombre" {...field} />
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
                                        <Input placeholder="Nombre de tu empresa" {...field} />
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
                                    <FormLabel>Email Corporativo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="nombre@empresa.com" {...field} />
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
                                        <Input placeholder="+56 9 ..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Sección: Detalles del Proyecto */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">2. Detalles del Proyecto</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="productType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Producto / Servicio de Interés</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona..." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="hdpe-gm13">Geomembrana HDPE (GM13)</SelectItem>
                                            <SelectItem value="hdpe-nominal">Geomembrana HDPE (Nominal)</SelectItem>
                                            <SelectItem value="ldpe">Geomembrana LLDPE</SelectItem>
                                            <SelectItem value="pvc">Geomembrana PVC</SelectItem>
                                            <SelectItem value="geotextil">Geotextil</SelectItem>
                                            <SelectItem value="instalacion">Servicio de Instalación</SelectItem>
                                            <SelectItem value="termofusion">Servicio de Termofusión</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="application"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Uso / Aplicación</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona..." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="mineria">Minería</SelectItem>
                                            <SelectItem value="agricultura">Agricultura (Tranque, Reservorio)</SelectItem>
                                            <SelectItem value="acuicultura">Acuicultura (Piscicultura)</SelectItem>
                                            <SelectItem value="construccion">Construcción / Obras Civiles</SelectItem>
                                            <SelectItem value="paisajismo">Paisajismo / Lagos Ornamentales</SelectItem>
                                            <SelectItem value="otro">Otro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="dimensions"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dimensiones Aprox. (m2 o medidas)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ej: 500 m2 / 20x25 metros" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
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
                                <FormLabel>Detalles Adicionales (Opcional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe cualquier requerimiento específico, espesor deseado, o dudas técnicas..."
                                        className="min-h-[100px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto md:min-w-[200px]" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Procesando...
                        </>
                    ) : (
                        "Solicitar Cotización"
                    )}
                </Button>
            </form>
        </Form>
    )
}
