import * as z from "zod"

// Base schema for quantity
export const quantitySchema = z.object({
    quantity: z.coerce.number().min(1, "Cantidad mínima de 1"),
})

// Extended schemas based on product type
export const geoSchema = quantitySchema.extend({
    length: z.coerce.number().min(1, "Requerido"),
    width: z.coerce.number().min(1, "Requerido"),
    height: z.coerce.number().min(0, "Requerido"),
    anchorage: z.coerce.number().min(0, "Requerido"),
    slope: z.coerce.number().min(0, "Requerido"),
    squareMeters: z.coerce.number().min(1, "Requerido"),
})

export const weldingSchema = quantitySchema.extend({
    diameter: z.string().min(1, "Selecciona el diámetro"),
    format: z.string().min(1, "Selecciona el formato"),
})

export const serviceSchema = quantitySchema.extend({
    hasMaterial: z.enum(["yes", "no"]),
    materialType: z.string().optional(),
    length: z.coerce.number().min(1, "Requerido"),
    width: z.coerce.number().min(1, "Requerido"),
    height: z.coerce.number().min(0, "Requerido"),
    anchorage: z.coerce.number().min(0, "Requerido"),
    slope: z.coerce.number().min(0, "Requerido"),
    squareMeters: z.coerce.number().min(1, "Requerido"),
}).refine((data) => {
    if (data.hasMaterial === "no" && !data.materialType) return false
    return true
}, {
    message: "Selecciona que material necesitas",
    path: ["materialType"]
})

export type QuantityFormValues = z.infer<typeof quantitySchema>
export type GeoFormValues = z.infer<typeof geoSchema>
export type WeldingFormValues = z.infer<typeof weldingSchema>
export type ServiceFormValues = z.infer<typeof serviceSchema>
