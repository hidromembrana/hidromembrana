"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ArrowRight, Play, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"

// --- Types ---
interface Project {
    id: string
    title: string
    category: string
    videoThumbnail: string // Placeholder for video
    images: string[]
    challenge: string
    solution: string
    result: string
    reversed?: boolean // For zig-zag control
}

// --- Data ---
const PROJECTS: Project[] = [
    {
        id: "tranques-mineria",
        title: "Revestimiento Tranque de Relaves Minera Norte",
        category: "Minería",
        videoThumbnail: "/images/projects/project-mining-video-thumb.webp", // Mock path
        images: [
            "/images/projects/mining-1.webp",
            "/images/projects/mining-2.webp",
            "/images/projects/mining-3.webp"
        ],
        challenge: "Filtraciones críticas en tranque de 50.000 m³ ponían en riesgo la licencia ambiental por contaminación de napas.",
        solution: "Instalación de doble capa de Geomembrana HDPE 2.0mm texturada con sistema de detección de fugas geoeléctrico.",
        result: "Cero filtraciones certificadas. Continuidad operativa asegurada y cumplimiento total de la normativa ambiental.",
        reversed: false
    },
    {
        id: "embalse-agricola",
        title: "Impermeabilización Mega-Embalse Agrícola Valle Central",
        category: "Agrícola",
        videoThumbnail: "/images/projects/project-agri-video-thumb.webp",
        images: [
            "/images/projects/agri-1.webp",
            "/images/projects/agri-2.webp",
            "/images/projects/agri-3.webp"
        ],
        challenge: "Pérdida del 30% del recurso hídrico por infiltración en suelo arenoso, afectando el riego de 500 hectáreas.",
        solution: "Geomembrana HDPE 1.0mm con geotextil no tejido 200g para protección mecánica contra suelo rocoso.",
        result: "Recuperación del 100% de la capacidad de retención. Aumento de la superficie de riego disponible.",
        reversed: true
    },
    {
        id: "planta-tratamiento",
        title: "Lagunas de Oxidación Planta de Tratamiento",
        category: "Sanitario",
        videoThumbnail: "/images/projects/project-water-video-thumb.webp",
        images: [
            "/images/projects/water-1.webp",
            "/images/projects/water-2.webp",
            "/images/projects/water-3.webp"
        ],
        challenge: "Rehabilitación de lagunas con hormigón fisurado. Necesidad de intervención rápida sin detener la planta.",
        solution: "Instalación flotante y anclaje mecánico perimetral. Uso de soldadura por extrusión en puntos críticos.",
        result: "Extensión de vida útil de la infraestructura por 20 años. Operación ininterrumpida durante la obra.",
        reversed: false
    },
    {
        id: "techumbre-industrial",
        title: "Impermeabilización Techumbre Industrial Galpón Logístico",
        category: "Construcción",
        videoThumbnail: "/images/projects/project-roof-video-thumb.webp",
        images: [
            "/images/projects/roof-1.webp",
            "/images/projects/roof-2.webp",
            "/images/projects/roof-3.webp"
        ],
        challenge: "Filtraciones de lluvia dañando stock de alto valor. Cubierta metálica antigua con óxido avanzado.",
        solution: "Sobre-techo con Membrana PVC reforzada, resistente a UV y tránsito para mantenimiento.",
        result: "Protección total del inventario. Aislación térmica mejorada reduciendo temperatura interior en 5°C.",
        reversed: true
    }
]

// --- Components ---

function ProjectMultimedia({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Video / Main Media Area */}
            <div className="group relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                {/* Placeholder for Video - In real app would be <video> or <iframe> */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/50 group-hover:bg-zinc-800/40 transition-colors cursor-pointer">
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-1 fill-white" />
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg w-fit">
                    Ver Video del Proyecto
                </div>
                {/* Fallback Image if needed */}
                {/* <Image src={project.videoThumbnail} fill className="object-cover opacity-50" alt="Video thumbnail" /> */}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-3">
                {project.images.map((img, idx) => (
                    <div key={idx} className="group relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden cursor-zoom-in shadow-sm border border-zinc-200 dark:border-zinc-700">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                        {/* Placeholder Image Div */}
                        <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-xs">Img {idx + 1}</span>
                        </div>
                        {/* Actual Image Tag (Commented out until real images exist to avoid broken img icons) */}
                        {/* 
                        <Image 
                            src={img} 
                            alt={`Detalle ${idx + 1}`} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        /> 
                        */}
                    </div>
                ))}
            </div>
        </div>
    )
}

function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="flex flex-col justify-center h-full space-y-6">
            <div>
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border-brand-blue/20">
                    {project.category}
                </Badge>
                <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl leading-tight">
                    {project.title}
                </h3>
            </div>

            <div className="space-y-4">
                <div className="flex gap-3">
                    <div className="mt-1 flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                            <span className="text-red-600 dark:text-red-400 font-bold text-xs">!</span>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold text-foreground block mb-1">El Desafío</span>
                        <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-brand-cyan" />
                    </div>
                    <div>
                        <span className="font-bold text-foreground block mb-1">La Solución</span>
                        <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="mt-1 flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <div>
                        <span className="font-bold text-foreground block mb-1">Resultado</span>
                        <p className="text-muted-foreground leading-relaxed">{project.result}</p>
                    </div>
                </div>
            </div>

            <div className="pt-4">
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
