import Link from "next/link"

export function CtaSection() {
    return (
        <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -tr-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -bl-20 h-64 w-64 rounded-full bg-brand-cyan/20 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    ¿Listo para iniciar tu proyecto?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-50">
                    Contamos con el stock más amplio de geomembranas y un equipo de instalación certificado.
                    Obtén una cotización personalizada hoy mismo.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                        href="/contacto"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-brand-blue shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Solicitar Cotización
                    </Link>
                    <Link
                        href="/contacto"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Hablemos por WhatsApp
                    </Link>
                </div>
            </div>
        </section>
    )
}
