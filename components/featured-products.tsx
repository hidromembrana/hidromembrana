import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
    {
        id: "geomembrana",
        title: "Geomembranas HDPE/LLDPE",
        description: "Láminas de alta resistencia química y mecánica para impermeabilización de proyectos.",
        href: "/productos#geomembrana",
    },
    {
        id: "geotextil",
        title: "Geotextiles",
        description: "Materiales permeables para separación, filtración, refuerzo y protección de suelos.",
        href: "/productos#geotextil",
    },
    {
        id: "instalacion",
        title: "Servicios de Instalación",
        description: "Equipo calificado para la instalación certificada de geosintéticos en terreno.",
        href: "/servicios",
    },
]

export function FeaturedProducts() {
    return (
        <section className="bg-surface py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Nuestros Productos y Servicios
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Ofrecemos soluciones de alta calidad para garantizar la estanqueidad y durabilidad de sus obras.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:border-brand-blue/30"
                        >
                            <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-cyan/5 to-brand-blue/5 opacity-0 transition-opacity group-hover:opacity-100" />

                            <div className="relative z-10 space-y-4">
                                <div className="aspect-video w-full overflow-hidden rounded-lg bg-surface/50 border border-border flex items-center justify-center text-muted-foreground transition-colors group-hover:border-brand-blue/20">
                                    {/* Placeholder image - could be replaced with real images later */}
                                    <div className="font-bold text-4xl text-brand-blue/20 group-hover:text-brand-blue/40 transition-colors">
                                        {product.title.charAt(0)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold group-hover:text-brand-blue transition-colors">{product.title}</h3>
                                    <p className="text-muted-foreground">{product.description}</p>
                                </div>
                            </div>
                            <div className="relative z-10 mt-6">
                                <Link
                                    href={product.href}
                                    className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-cyan"
                                >
                                    Saber más <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/productos"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Ver Catálogo Completo
                    </Link>
                </div>
            </div>
        </section>
    )
}
