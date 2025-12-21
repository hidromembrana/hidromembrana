"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useSearchParams } from "next/navigation"
import { CONTACT_INFO } from "@/lib/config"
import Image from "next/image"

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, FileText, Info } from "lucide-react"
import { PRODUCTS } from "@/lib/products"

// --- Schemas & Types ---

const baseSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    company: z.string().optional(),
    email: z.string().email("Email inválido"),
    phone: z.string().min(8, "Teléfono inválido"),
    productType: z.string().min(1, "Selecciona un producto o servicio"),
    location: z.string().min(1, "Indica la ubicación del proyecto"),
    details: z.string().optional(),
})

// We'll extend this schema dynamically or use a super-schema with optional fields that become required based on context
// For simplicity in a single form, we can make conditionally required fields optional in the schema but enforce them in the UI or use .superRefine
const formSchema = baseSchema.extend({
    // Geosynthetics & Installation Fields
    geo_length: z.string().optional(),
    geo_width: z.string().optional(),
    geo_height: z.string().optional(),
    geo_anchorage: z.string().optional(),

    // Installation Specifics
    inst_has_material: z.enum(["yes", "no"]).optional(),
    inst_material_type: z.string().optional(),

    // Welding Specifics
    welding_diameter: z.string().optional(),
    welding_kilos: z.string().optional(),
}).superRefine((data, ctx) => {
    // Conditional Validation Logic

    const isGeosynthetic = data.productType.includes("geomembrana") || data.productType.includes("geotextil");
    const isInstallation = data.productType === "servicio-instalacion-reparacion"; // Check ID from products.ts
    const isWelding = data.productType === "soldadura-hdpe";

    if (isGeosynthetic || isInstallation) {
        if (!data.geo_length) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["geo_length"] });
        if (!data.geo_width) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["geo_width"] });
        // Height and Anchorage might be optional depending on project (e.g. flat sheet vs pond), but user asked for them. Let's make them required for now based on user request "pide estos datos".
        if (!data.geo_height) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["geo_height"] });
        if (!data.geo_anchorage) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["geo_anchorage"] });
    }

    if (isInstallation) {
        if (!data.inst_has_material) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Selecciona una opción", path: ["inst_has_material"] });
        if (!data.inst_material_type) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Selecciona el material", path: ["inst_material_type"] });
    }

    if (isWelding) {
        if (!data.welding_diameter) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Selecciona el diámetro", path: ["welding_diameter"] });
        if (!data.welding_kilos) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Selecciona el formato", path: ["welding_kilos"] });
    }
});

export function QuotationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const searchParams = useSearchParams()

    // Get default product from URL ?product=slug
    const defaultProduct = searchParams.get("product") || ""

    // Find the product object if it exists to verify ID, otherwise default to empty
    // The select values will be the product IDs (slugs or IDs defined in products.ts)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            productType: defaultProduct,
            location: "",
            details: "",
            geo_length: "",
            geo_width: "",
            geo_height: "",
            geo_anchorage: "",
            inst_has_material: undefined,
            inst_material_type: "",
            welding_diameter: undefined,
            welding_kilos: undefined,
        },
    })

    const watchProductType = form.watch("productType");
    const watchHasMaterial = form.watch("inst_has_material");

    // Helper to determine form state
    const isGeosynthetic = watchProductType && (watchProductType.includes("geomembrana") || watchProductType.includes("geotextil"));
    const isInstallation = watchProductType === "servicio-instalacion-reparacion";
    const isWelding = watchProductType === "soldadura-hdpe";

    // Determine if we show the measures fields (Geosynthetics OR Installation)
    const showMeasures = isGeosynthetic || isInstallation;

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
            <div className="flex flex-col items-center justify-center p-8 text-center bg-card rounded-xl border shadow-sm animate-in fade-in-50">
                <div className="h-24 w-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">¡Solicitud Enviada!</h3>
                <p className="text-muted-foreground mb-8 max-w-lg text-lg">
                    Hemos recibido los detalles de tu proyecto. Un especialista técnico revisará la información y te enviará una cotización formal a tu correo.
                </p>
                <Button onClick={() => setIsSuccess(false)} size="lg" className="w-full sm:w-auto">
                    Nueva Cotización
                </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                {/* 1. Selección de Producto (First to determine context) */}
                <div className="bg-muted/30 p-6 rounded-lg border">
                    <FormField
                        control={form.control}
                        name="productType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-semibold">¿Qué necesitas cotizar?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="h-12 text-base bg-background">
                                            <SelectValue placeholder="Selecciona un producto o servicio..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {PRODUCTS.map((product) => (
                                            <SelectItem key={product.id} value={product.id}>
                                                {product.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* 2. Datos Técnicos Específicos */}
                <div className="space-y-6">

                    {/* -- LOGIC FOR WELDING ROD -- */}
                    {isWelding && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border rounded-lg bg-card">
                            <FormField
                                control={form.control}
                                name="welding_diameter"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Diámetro del cordón (mm)</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex space-x-4"
                                            >
                                                <FormItem className="flex items-center space-x-2 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="4mm" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        4 mm
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-2 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="5mm" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        5 mm
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-2 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="6mm" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        6 mm
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="welding_kilos"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Formato / Peso</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex space-x-4"
                                            >
                                                <FormItem className="flex items-center space-x-2 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="10kg" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Rollo 10 Kg
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-2 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="15kg" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Rollo 15 Kg
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    )}

                    {/* -- LOGIC FOR INSTALLATION SERVICE -- */}
                    {isInstallation && (
                        <div className="p-4 border border-blue-100 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg space-y-6">
                            <div className="flex items-start gap-3">
                                <Info className="h-5 w-5 text-blue-600 mt-1" />
                                <p className="text-sm text-blue-800 dark:text-blue-300">
                                    Para el servicio de instalación, necesitamos saber si ya cuentas con la geomembrana o si también debemos suministrarla.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="inst_has_material"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel>¿Ya cuentas con el material?</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex space-x-4"
                                                >
                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="yes" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Sí, solo necesito instalación</FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="no" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">No, necesito Material + Instalación</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="inst_material_type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tipo de Material a Instalar</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {PRODUCTS.filter(p => p.category === 'geomembrana' || p.category === 'geotextil').map((product) => (
                                                        <SelectItem key={product.id} value={product.id}>
                                                            {product.title}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    )}

                    {/* -- MEASUREMENTS: GEOSYNTHETICS OR INSTALLATION -- */}
                    {showMeasures && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <FileText className="h-5 w-5" />
                                    Medidas del Proyecto
                                </h3>

                                <FormField
                                    control={form.control}
                                    name="geo_length"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Largo del proyecto (metros)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Ej: 50" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="geo_width"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Ancho del proyecto (metros)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Ej: 40" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="geo_height"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Alto / Profundidad (metros)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Ej: 2" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="geo_anchorage"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Anclajes (metros)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Ej: 0.5" {...field} />
                                            </FormControl>
                                            <FormDescription className="text-xs">
                                                Longitud adicional para fijar la membrana en los bordes.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="bg-muted/50 rounded-xl p-4 border flex flex-col items-center justify-center">
                                <p className="text-sm font-medium mb-3 text-muted-foreground w-full text-left">
                                    Guía de Referencia para Medidas
                                </p>
                                <div className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden border shadow-sm">
                                    <Image
                                        src="/images/medidas-referencia2.webp"
                                        alt="Esquema de medidas de geomembrana"
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 text-center">
                                    Las medidas de largo, ancho, profundidad y anclajes nos permiten calcular la superficie total y los cortes necesarios.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* 3. Datos de Contacto y Ubicación */}
                    <div className="pt-6 border-t">
                        <h3 className="text-lg font-semibold mb-4">Datos de Contacto</h3>
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="tu@email.com" {...field} />
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
                                            <Input placeholder={CONTACT_INFO.whatsapp.number} {...field} />
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
                                <FormItem className="mt-4">
                                    <FormLabel>Comentarios Adicionales</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Cualquier otro detalle importante..."
                                            className="min-h-[80px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto md:min-w-[200px]" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando Solicitud...
                        </>
                    ) : (
                        "Solicitar Cotización"
                    )}
                </Button>
            </form>
        </Form>
    )
}
