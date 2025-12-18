"use client"

import { useState } from "react"
import { PRODUCTS, ProductCategory } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { cn } from "@/lib/utils"

const CATEGORIES: { id: ProductCategory | "all"; label: string }[] = [
    { id: "all", label: "Todo" },
    { id: "geomembrana", label: "Geomembranas" },
    { id: "geotextil", label: "Geotextiles" },
    { id: "insumos", label: "Insumos" },
    { id: "servicios", label: "Servicios" },
]

export default function ProductosPage() {
    const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all")

    const filteredProducts = activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter((product) => product.category === activeCategory)

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-[image:var(--image-brand-gradient)] bg-clip-text text-transparent py-3">
                    Catálogo de Productos
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                    Explora nuestra gama de soluciones geosintéticas de alta calidad para tus proyectos de ingeniería.
                </p>
            </div>

            {/* Category Filter */}
            <div className="mt-12 flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                            "rounded-full px-6 py-2 text-sm font-medium transition-all",
                            activeCategory === category.id
                                ? "bg-brand-blue text-white shadow-md hover:bg-brand-cyan"
                                : "bg-surface border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="mt-20 text-center text-muted-foreground">
                    <p>No se encontraron productos en esta categoría.</p>
                </div>
            )}
        </div>
    )
}
