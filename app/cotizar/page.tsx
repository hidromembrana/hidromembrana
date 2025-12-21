import { QuotationForm } from "@/components/quotation-form"

export const metadata = {
    title: "Cotizar Proyecto | Hidromembrana",
    description: "Solicita una cotización formal para tu proyecto de geomembranas e impermeabilización.",
}

export default function CotizarPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Cotiza tu Proyecto</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Cuéntanos los detalles técnicos de tu requerimiento.
                        Este formulario está diseñado para obtener la información necesaria y entregarte un presupuesto preciso.
                    </p>
                </div>

                <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border">
                    <QuotationForm />
                </div>
            </div>
        </div>
    )
}
