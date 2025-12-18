import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { CtaSection } from "@/components/cta-section"



export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.id,
    }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = PRODUCTS.find((p) => p.id === slug)

    if (!product) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header / Breadcrumb */}
            <div className="bg-surface border-b border-border">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/productos" className="inline-flex items-center text-sm text-muted-foreground hover:text-brand-blue mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al catálogo
                    </Link>
                    <h1 className="text-3xl font-bold md:text-5xl">{product.title}</h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl">{product.description}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Image / Visual */}
                    <div className="aspect-square w-full overflow-hidden rounded-xl bg-surface/50 border border-border flex items-center justify-center">
                        <span className="text-9xl font-bold text-brand-blue/20">{product.imagePlaceholder || product.title.charAt(0)}</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Características Principales</h2>
                            {product.features ? (
                                <ul className="space-y-3">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="mr-3 h-6 w-6 text-brand-cyan shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted-foreground">Información detallada disponible al solicitar cotización.</p>
                            )}
                        </div>

                        <div className="rounded-lg border border-brand-blue/20 bg-brand-blue/5 p-6">
                            <h3 className="text-lg font-semibold text-brand-blue mb-2">¿Interesado en este producto?</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Nuestros expertos pueden asesorarte sobre la mejor solución para tu proyecto.
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white hover:bg-brand-cyan transition-colors"
                            >
                                Cotizar {product.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <CtaSection />
        </div>
    )
}
