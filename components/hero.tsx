import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { HeroCta } from "@/components/hero-cta"

export function Hero() {
    return (
        <section className="relative flex min-h-[600px] flex-col justify-center overflow-hidden py-16 md:py-24 lg:py-28">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 -z-30 select-none">
                <Image
                    src="/hero.webp"
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
                            {/* Pre-headline */}
                            <p className="font-semibold text-brand-cyan tracking-wide uppercase text-sm md:text-base animate-in fade-in slide-in-from-bottom-3 duration-700">
                                Para Constructoras, Mineras y Proyectos Agrícolas
                            </p>

                            {/* Headline */}
                            {/* Headline */}
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl leading-tight">
                                Cotiza Geomembranas y <br className="hidden md:block" />
                                <span className="bg-[image:var(--image-brand-gradient)] bg-clip-text text-transparent">
                                    Geotextiles Certificados
                                </span>
                            </h1>

                            {/* Sub-headline */}
                            <p className="mx-auto max-w-[800px] text-lg text-zinc-200 md:text-xl leading-relaxed text-shadow-sm font-medium">
                                Evita retrasos. Instalación certificada GRI-GM13. <br className="hidden sm:block" />
                                Recibe tu presupuesto técnico en minutos.
                            </p>
                        </div>

                        <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-center pt-4">
                            <HeroCta />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
