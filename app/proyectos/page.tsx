"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"

// --- Types ---
interface Project {
    id: string
    title: string
    specs: string // New field for specific technical details (e.g. dimensions)
    category: string
    image: string // Single image
    description: string
    reversed?: boolean
}

// --- Data ---
const PROJECTS: Project[] = [
    {
        id: "tranques-mineria",
        title: "Revestimiento Tranque de Relaves",
        specs: "50.000 m² - Geomembrana HDPE 2.0mm",
        category: "Minería",
        image: "/images/projects/mining-1.webp",
        description: "Impermeabilización de alta seguridad para contención de relaves. Se aseguró la estanqueidad total mediante soldadura por termofusión y control de calidad geoeléctrico, garantizando el cumplimiento de la normativa ambiental vigente.",
        reversed: false
    },
    {
        id: "embalse-agricola",
        title: "Mega-Embalse Valle Central",
        specs: "120.000 m² - HDPE 1.5mm + Geotextil",
        category: "Agrícola",
        image: "/images/projects/agri-1.webp",
        description: "Proyecto de acumulación de agua para riego de 500 hectáreas. Instalación sobre suelo complejo utilizando geotextil no tejido para protección mecánica. La obra se entregó 2 semanas antes del plazo, asegurando la temporada de riego.",
        reversed: true
    },
    {
        id: "planta-tratamiento",
        title: "Lagunas de Oxidación",
        specs: "15.000 m² - Reparación y Revestimiento",
        category: "Sanitario",
        image: "/images/projects/water-1.webp",
        description: "Rehabilitación de lagunas de tratamiento con infraestructura en operación. Se utilizaron técnicas de instalación flotante y anclaje mecánico en hormigón para extender la vida útil de la planta por 20 años más.",
        reversed: false
    }
]

// --- Components ---

function ProjectMultimedia({ project }: { project: Project }) {
    return (
        <div className="w-full aspect-video md:aspect-[16/10] relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 group">
            <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" /> {/* Loading state placeholder */}
            {/* Using generic placeholder path in src, in real app ensure these files exist or use a service */}
            {/* For now using a colored div placeholder representation if image fails or for immediate visual */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.category === 'Minería' ? 'from-slate-800 to-slate-900' : project.category === 'Agrícola' ? 'from-emerald-900 to-emerald-950' : 'from-cyan-900 to-blue-950'} flex items-center justify-center`}>
                <span className="text-white/20 font-bold text-4xl uppercase tracking-widest">{project.category}</span>
            </div>
            {/* Actual Image component - Uncomment and ensure paths exist 
            <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            */}
        </div>
    )
}

function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="flex flex-col justify-center h-full space-y-6">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="px-3 py-1 text-sm font-medium bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                        {project.category}
                    </Badge>
                    <span className="text-sm font-semibold text-muted-foreground border-l border-zinc-300 pl-3">
                        {project.specs}
                    </span>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl leading-tight mb-4">
                    {project.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                </p>
            </div>

            <div className="pt-2">
                <Link href="/contacto">
                    <Button variant="outline" className="group border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
                        Cotizar proyecto similar
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default function ProyectosPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                        Casos de Éxito
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Resultados reales para desafíos complejos. Descubre cómo ayudamos a nuestros clientes a proteger su inversión.
                    </p>
                </div>
            </section>

            {/* Projects List */}
            <section className="container mx-auto px-4 py-24 space-y-24 md:space-y-32">
                {PROJECTS.map((project, index) => (
                    <div
                        key={project.id}
                        className={cn(
                            "flex flex-col gap-12 md:gap-20 items-center",
                            project.reversed ? "md:flex-row-reverse" : "md:flex-row"
                        )}
                    >
                        {/* Multimedia Column (50-60% width ideal) */}
                        <div className="w-full md:w-1/2 lg:w-3/5">
                            <ProjectMultimedia project={project} />
                        </div>

                        {/* Text Column */}
                        <div className="w-full md:w-1/2 lg:w-2/5">
                            <ProjectContent project={project} />
                        </div>
                    </div>
                ))}
            </section>

            <CtaSection />
        </div>
    )
}
