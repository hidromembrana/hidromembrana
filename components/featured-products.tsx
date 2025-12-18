import Link from "next/link"
import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
    // Select top 3 products for the homepage
    const featured = PRODUCTS.slice(0, 3);

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
                    {featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
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
