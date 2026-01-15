import * as z from "zod"

// Base schema for quantity
export const quantitySchema = z.object({
    quantity: z.coerce.number().min(1, "Cantidad mínima de 1"),
})

// Extended schemas based on product type
// Extended schemas based on product type
export const geoSchema = quantitySchema.extend({
    calculationMode: z.enum(["dimensions", "total"]).default("dimensions"),
    thickness: z.string().optional(),
    length: z.coerce.number().optional(),
    width: z.coerce.number().optional(),
    height: z.coerce.number().optional(),
    anchorage: z.coerce.number().optional(),
    slope: z.coerce.number().optional(),
    squareMeters: z.coerce.number().optional(),
}).superRefine((data, ctx) => {
    if (data.calculationMode === "dimensions") {
        if (!data.length) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["length"] })
        if (!data.width) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["width"] })
        // Height check removed as per user request to remove depth field
        if (data.anchorage === undefined) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["anchorage"] })
        if (data.slope === undefined) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["slope"] })
    } else if (data.calculationMode === "total") {
        if (!data.squareMeters) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Requerido", path: ["squareMeters"] })
    }
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

export const maintenanceSchema = quantitySchema.extend({
    details: z.string().min(10, "Por favor describe tu problema con más detalle (mínimo 10 caracteres)"),
})

export type QuantityFormValues = z.infer<typeof quantitySchema>
export type GeoFormValues = z.infer<typeof geoSchema>
export type WeldingFormValues = z.infer<typeof weldingSchema>
export type ServiceFormValues = z.infer<typeof serviceSchema>
export type MaintenanceFormValues = z.infer<typeof maintenanceSchema>
