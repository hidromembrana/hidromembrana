import * as z from "zod"

export const quotationFormSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    company: z.string().optional(),
    email: z.string().email("Email inválido"),
    phone: z.string().min(8, "Teléfono inválido"),
    location: z.string().min(1, "Indica la ubicación del proyecto"),
    details: z.string().optional(),
})

export type QuotationFormValues = z.infer<typeof quotationFormSchema>
