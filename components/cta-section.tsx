import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CtaSection() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            {/* Background with Gradient and Texture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-cyan/80" />
                <div className="absolute inset-0 bg-[url('/hero.webp')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-cyan/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md sm:p-12 lg:p-16">
                    <div className="text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-sm">
                            ¿Listo para iniciar tu proyecto?
                        </h2>
                        <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-50 md:text-xl leading-relaxed">
                            Contamos con el stock más amplio de geomembranas y un equipo de instalación certificado.
                            Garantizamos la calidad y durabilidad en cada obra.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                            <Link
                                href="/contacto"
                                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 text-base font-bold text-brand-blue shadow-lg transition-all hover:bg-zinc-50 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                            >
                                <span className="relative flex items-center gap-2">
                                    Solicitar Cotización
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>

                            <Link
                                href="https://wa.me/YOUR_NUMBER"
                                className="group inline-flex h-14 items-center justify-center rounded-full bg-[#25D366] px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                            >
                                <span className="flex items-center gap-2">
                                    <MessageCircle className="h-5 w-5" />
                                    Hablemos por WhatsApp
                                </span>
                            </Link>
                        </div>

                        <p className="mt-8 text-sm text-blue-100/80">
                            Respuesta rápida en menos de 24 horas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
