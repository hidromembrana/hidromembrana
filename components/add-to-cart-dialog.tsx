"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Product } from "@/lib/products"
import { useQuoteCart } from "@/components/providers/quote-cart-provider"
import { LeadCaptureDialog } from "@/components/forms/lead-capture-dialog"
import { quantitySchema, geoSchema, weldingSchema, serviceSchema } from "@/lib/schemas/cart-config-schema"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info, Plus, ShoppingCart } from "lucide-react"
import { DimensionFields } from "./dimension-fields"

interface AddToCartDialogProps {
    product: Product
    children?: React.ReactNode
    variant?: "default" | "icon"
}

export function AddToCartDialog({ product, children, variant = "default" }: AddToCartDialogProps) {
    const [open, setOpen] = useState(false)
    const [showLeadModal, setShowLeadModal] = useState(false)
    const { addItem, contactInfo } = useQuoteCart()
    const router = useRouter()

    const handleOpenChange = (isOpen: boolean) => {
        if (isOpen) {
            // Check if we have contact info
            if (!contactInfo.isSaved) {
                setShowLeadModal(true)
                return
            }
        }
        setOpen(isOpen)
    }

    const handleLeadSuccess = () => {
        setShowLeadModal(false)
        setOpen(true)
    }

    // Determine form type - ensure these values are always strings for comparison
    const productCategory = String(product.category || "")
    const productId = String(product.id || "")
    const isGeosynthetic = productCategory === "geomembrana" || productCategory === "geotextil"
    const isWelding = productId === "soldadura-hdpe"
    const isService = productCategory === "servicios"
    const isSimple = !isGeosynthetic && !isWelding && !isService

    // Initialize form with dynamic resolver
    const form = useForm<any>({
        resolver: zodResolver(
            isGeosynthetic ? geoSchema :
                isWelding ? weldingSchema :
                    isService ? serviceSchema :
                        quantitySchema
        ),
        defaultValues: {
            quantity: 1,
            // Geo defaults
            length: "",
            width: "",
            height: "",
            anchorage: "",
            slope: "",
            squareMeters: "",
            // Welding defaults
            diameter: "",
            format: "",
            // Service defaults
            hasMaterial: undefined,
            materialType: "",
        },
        mode: "onSubmit", // Only validate on submit, not on mount or change
        reValidateMode: "onSubmit", // Only revalidate on submit
    })

    const onSubmit = (values: any) => {
        // Transform values to QuoteItemConfig
        const config: any = {}

        if (isGeosynthetic) {
            config.length = values.length
            config.width = values.width
            config.height = values.height
            config.anchorage = values.anchorage
            config.slope = values.slope
            config.squareMeters = values.squareMeters
        } else if (isWelding) {
            config.diameter = values.diameter
            config.format = values.format
        } else if (isService) {
            config.hasMaterial = values.hasMaterial
            config.materialType = values.materialType
            config.length = values.length
            config.width = values.width
            config.height = values.height
            config.anchorage = values.anchorage
            config.slope = values.slope
            config.squareMeters = values.squareMeters
        }

        addItem(product, config, values.quantity)
        toast.success("Producto agregado a la cotización", {
            action: {
                label: "Ver",
                onClick: () => router.push("/cotizar")
            }
        })
        setOpen(false)
        form.reset()
    }

    return (
        <>
            <LeadCaptureDialog
                open={showLeadModal}
                onOpenChange={setShowLeadModal}
                onSuccess={handleLeadSuccess}
            />

            <Dialog open={open} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild>
                    {children ? children : (
                        <Button
                            size={variant === "icon" ? "icon" : "default"}
                            variant={variant === "icon" ? "ghost" : "default"}
                            className={variant === "icon" ? "h-8 w-8 rounded-full" : "w-full sm:w-auto"}
                        >
                            {variant === "icon" ? (
                                <Plus className="h-4 w-4" />
                            ) : (
                                <>Aggregar <ShoppingCart className="ml-2 h-4 w-4" /></>
                            )}
                            <span className="sr-only">Agregar a cotización</span>
                        </Button>
                    )}
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Agregar a Cotización</DialogTitle>
                        <DialogDescription>
                            Configura los detalles para {product.title}
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">

                            {/* Common: Quantity (Hidden for Services & Geosynthetics) */}
                            {!isService && !isGeosynthetic && (
                                <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Cantidad / Unidades</FormLabel>
                                            <FormControl>
                                                <Input type="number" min={1} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}

                            {/* Specifics: Geosynthetics */}
                            {isGeosynthetic && (
                                <div className="space-y-4">
                                    <DimensionFields form={form} showHeight showAnchorage />

                                    <div className="bg-muted/50 rounded-xl p-3 border flex flex-col items-center justify-center">
                                        <p className="text-sm font-medium mb-3 text-muted-foreground w-full text-left">
                                            Guía de Referencia
                                        </p>
                                        <div className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden border shadow-sm">
                                            {/* Using generic img tag as per user request to use the specific image */}
                                            <img
                                                src="/images/medidas-referencia.webp"
                                                alt="Esquema de medidas"
                                                className="object-contain w-full h-full p-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Specifics: Welding */}
                            {isWelding && (
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="diameter"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Diámetro</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Selecciona..." />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="4mm">4 mm</SelectItem>
                                                        <SelectItem value="5mm">5 mm</SelectItem>
                                                        <SelectItem value="6mm">6 mm</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="format"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Formato</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Selecciona..." />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="10kg">Rollo 10 Kg</SelectItem>
                                                        <SelectItem value="15kg">Rollo 15 Kg</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}

                            {/* Specifics: Services */}
                            {isService && (
                                <div className="space-y-4">
                                    <DimensionFields form={form} showHeight showAnchorage />
                                    <FormField
                                        control={form.control}
                                        name="hasMaterial"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>¿Ya cuentas con el material?</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="yes" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Sí, solo instalación
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="no" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                No, necesito materiales
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {form.watch("hasMaterial") === "no" && (
                                        <FormField
                                            control={form.control}
                                            name="materialType"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Material Requerido</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selecciona material..." />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="geomembrana-hdpe">Geomembrana HDPE</SelectItem>
                                                            <SelectItem value="geotextil">Geotextil</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                </div>
                            )}

                            <DialogFooter className="mt-6">
                                <Button type="submit" className="w-full">
                                    Agregar al Proyecto
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}
