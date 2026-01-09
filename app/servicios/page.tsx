"use client"

import {
    Layers,
    ShieldCheck,
    Wrench,
    ArrowRight,
    MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CtaSection } from "@/components/cta-section"
import { AddToCartDialog } from "@/components/add-to-cart-dialog"
import { PRODUCTS } from "@/lib/products"
import Link from "next/link"

function ServiceAction({ service }: { service: ServiceItem }) {
    const baseProduct = PRODUCTS.find(p => p.id === (service.hrefId || "servicio-instalacion-reparacion"))

    if (!baseProduct) return null

    // Create a specific product object for this service to ensure the proper title appears in Cart
    const serviceProduct = {
        ...baseProduct,
        title: service.title,
        id: service.id // Use unique ID to allow separate cart items for different services
    }

    return (
        <AddToCartDialog product={serviceProduct}>
            <button className="inline-flex items-center text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-cyan cursor-pointer">
                Solicitar Servicio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
        </AddToCartDialog>
    )
}

interface ServiceItem {
    id: string
    title: string
    description: string
    icon: React.ElementType
    color: string
    colSpan?: string
    hrefId?: string
    isCta?: boolean
}

const SERVICES: ServiceItem[] = [
    {
        id: "instalacion-geomembranas",
        title: "Instalación de Geomembranas",
        description: "Garantizamos estanqueidad total. Soldadura por termofusión bajo norma internacional para evitar multas y pérdidas.",
        icon: Layers,
        color: "from-blue-500 to-cyan-400",
        colSpan: "md:col-span-1",
        hrefId: "servicio-instalacion-reparacion"
    },
    {
        id: "instalacion-geotextiles",
        title: "Instalación de Geotextiles",
        description: "Blinda tu inversión. Evita punzonamientos y rupturas en la geomembrana mejorando la estabilidad del suelo.",
        icon: ShieldCheck,
        color: "from-emerald-500 to-green-400",
        colSpan: "md:col-span-1",
        hrefId: "servicio-instalacion-reparacion"
    },
    {
        id: "mantencion-instalaciones",
        title: "Mantención y Reparación",
        description: "¿Tu tranque pierde nivel? Detectamos y sellamos filtraciones críticas rápidamente para recuperar la operatividad.",
        icon: Wrench,
        color: "from-slate-500 to-zinc-400",
        colSpan: "md:col-span-1",
        hrefId: "servicio-instalacion-reparacion"
    },
    {
        id: "expert-consultation",
        title: "¿Dudas con tu Proyecto?",
        description: "No arriesgues tu obra. Nuestros ingenieros te ayudan a calcular espesores y cubicaciones gratis.",
        icon: MessageCircle,
        color: "bg-primary text-primary-foreground",
        colSpan: "md:col-span-1",
        isCta: true
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

            {/* Bento Grid Services 2x2 */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 auto-rows-fr">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border transition-all hover:scale-[1.01] hover:shadow-2xl p-8 flex flex-col",
                                !service.isCta && "bg-white border-zinc-200 shadow-sm hover:border-brand-blue/30 backdrop-blur-sm dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 dark:shadow-none",
                                service.isCta && "bg-brand-blue border-transparent text-white shadow-lg hover:bg-brand-blue/90",
                                service.colSpan
                            )}
                        >
                            {/* Standard Service Card Content */}
                            {!service.isCta && (
                                <>
                                    {/* Colorful Gradient Background on Hover */}
                                    <div className={cn(
                                        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 bg-gradient-to-br",
                                        service.color
                                    )} />

                                    {/* Icon Blob */}
                                    <div className={cn(
                                        "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg flex-shrink-0",
                                        service.color
                                    )}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>

                                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                                        {service.title}
                                    </h3>

                                    <p className="mb-8 text-muted-foreground leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto">
                                        <ServiceAction service={service} />
                                    </div>
                                </>
                            )}

                            {/* CTA Card Content */}
                            {service.isCta && (
                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                                    <div>
                                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner flex-shrink-0">
                                            <service.icon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                                            {service.title}
                                        </h3>

                                        <p className="mb-8 text-blue-50 leading-relaxed font-medium">
                                            {service.description}
                                        </p>
                                    </div>

                                    <Link
                                        href="/contacto"
                                        className="inline-flex items-center text-sm font-bold text-white bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-colors w-fit backdrop-blur-sm"
                                    >
                                        Hablar con un Experto
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <CtaSection />
        </div>
    )
}
