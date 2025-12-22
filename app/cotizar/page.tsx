import { QuotationForm } from "@/components/quotation-form"
import { CartSummary } from "@/components/cart-summary"

export const metadata = {
    title: "Cotizar Proyecto | Hidromembrana",
    description: "Solicita una cotización formal para tu proyecto de geomembranas e impermeabilización.",
}

export default function CotizarPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Cotiza tu Proyecto</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Cuéntanos los detalles técnicos de tu requerimiento.
                        Este formulario está diseñado para obtener la información necesaria y entregarte un presupuesto preciso.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-card rounded-2xl p-6 shadow-sm border">
                            <CartSummary />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="sticky top-24">
                            <h2 className="text-xl font-semibold mb-4 lg:hidden">Datos de Contacto</h2>
                            <div className="bg-muted/30 rounded-2xl p-1">
                                <QuotationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
