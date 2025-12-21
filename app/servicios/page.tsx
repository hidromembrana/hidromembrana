"use client"

import Link from "next/link"
import {
    Layers,
    ShieldCheck,
    Wrench,
    ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CtaSection } from "@/components/cta-section"

interface ServiceItem {
    id: string
    title: string
    description: string
    icon: React.ElementType
    color: string
    colSpan?: string
    hrefId?: string // To map to product ID in quotation
}

const SERVICES: ServiceItem[] = [
    {
        id: "instalacion-geomembranas",
        title: "Instalación de Geomembranas",
        description: "Servicio especializado de instalación y termofusión de láminas HDPE/LLDPE/PVC. Contamos con equipos de última generación (extrusoras y cuñas) y personal certificado para asegurar la estanqueidad total de su proyecto.",
        icon: Layers,
        color: "from-blue-500 to-cyan-400",
        colSpan: "md:col-span-2 lg:col-span-2",
        hrefId: "servicio-instalacion-reparacion"
    },
    {
        id: "instalacion-geotextiles",
        title: "Instalación de Geotextiles",
        description: "Colocación profesional de geotextiles no tejidos para protección, separación y drenaje. Fundamental para asegurar la integridad de la geomembrana y la estabilidad del suelo.",
        icon: ShieldCheck,
        color: "from-emerald-500 to-green-400",
        colSpan: "md:col-span-1 lg:col-span-1",
        hrefId: "servicio-instalacion-reparacion"
    },
    {
        id: "mantencion-instalaciones",
        title: "Mantención y Reparación",
        description: "Diagnóstico y reparación de fugas en sistemas existentes. Realizamos parches, soldaduras de reconexión y pruebas de vacío/spark test para certificar la hermeticidad.",
        icon: Wrench,
        color: "from-slate-500 to-zinc-400",
        colSpan: "md:col-span-3 lg:col-span-3", // Full width primarily
        hrefId: "servicio-instalacion-reparacion"
    }
]

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 pb-32 lg:py-32">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 text-center">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="block text-foreground">Soluciones Integrales</span>
                        <span className="block bg-[image:var(--image-brand-gradient)] bg-clip-text text-transparent">
                            en Geosintéticos
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                        Ingeniería, instalación y mantenimiento con los más altos estándares de calidad y certificación.
                    </p>
                </div>
            </section>

            {/* Bento Grid Services */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 auto-rows-[minmax(300px,auto)]">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border transition-all hover:scale-[1.01] hover:shadow-2xl backdrop-blur-sm p-8",
                                "bg-white border-zinc-200 shadow-sm hover:border-brand-blue/30",
                                "dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 dark:shadow-none",
                                service.colSpan
                            )}
                        >
                            {/* Colorful Gradient Background on Hover */}
                            <div className={cn(
                                "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 bg-gradient-to-br",
                                service.color
                            )} />

                            {/* Icon Blob */}
                            <div className={cn(
                                "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                                service.color
                            )}>
                                <service.icon className="h-8 w-8 text-white" />
                            </div>

                            <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                                {service.title}
                            </h3>

                            <p className="mb-8 text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                href={`/cotizar?product=${service.hrefId || "servicio-instalacion-reparacion"}`}
                                className="inline-flex items-center text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-cyan"
                            >
                                Solicitar Servicio
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <CtaSection />
        </div>
    )
}
