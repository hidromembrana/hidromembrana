import * as z from "zod"

export const leadSchema = z.object({
    name: z.string().min(2, "Ingresa tu nombre"),
    email: z.string().email("Ingresa un email válido"),
    phone: z.string().min(8, "Ingresa un teléfono válido"),
})

export type LeadFormValues = z.infer<typeof leadSchema>
