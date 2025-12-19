import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative flex min-h-[700px] flex-col justify-center overflow-hidden py-24 md:py-32 lg:py-40">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 -z-30 select-none">
                <Image
                    src="/hero.png"
                    alt="Instalación profesional de geomembranas"
                    fill
                    className="object-cover scale-105"
                    priority
                />
            </div>

            {/* Modern Gradient Overlay */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
            <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

            {/* Texture Overlay */}
            <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

            {/* Glowing Orbs for ambience */}
            <div className="absolute top-20 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px] opacity-60" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[100px] opacity-60" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="flex flex-col items-center space-y-8 text-center">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                                Soluciones Integrales en <br className="hidden md:block" />
                                <span className="bg-[image:var(--image-brand-gradient)] bg-clip-text text-transparent py-2">
                                    Impermeabilización
                                </span>
                            </h1>
                            <p className="mx-auto max-w-[700px] text-lg text-zinc-100 md:text-xl leading-relaxed text-shadow-sm">
                                Expertos en venta e instalación de geomembranas, geotextiles y sistemas de contención.
                                Calidad certificada para proyectos de ingeniería y minería.
                            </p>
                        </div>

                        <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/contacto"
                                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-brand-blue px-10 text-base font-bold text-white shadow-lg transition-all hover:bg-brand-cyan hover:scale-105 hover:shadow-brand-blue/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                            >
                                <span className="flex items-center gap-2">
                                    Solicitar Cotización
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                            <Link
                                href="/productos"
                                className="group inline-flex h-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-10 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                            >
                                Ver Productos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
