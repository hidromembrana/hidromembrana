import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Product } from "@/lib/products"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:border-brand-blue/30 h-full">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-cyan/5 to-brand-blue/5 opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10 space-y-4 flex-1">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-surface/50 border border-border flex items-center justify-center text-muted-foreground transition-colors group-hover:border-brand-blue/20">
                    <div className="font-bold text-4xl text-brand-blue/20 group-hover:text-brand-blue/40 transition-colors">
                        {product.imagePlaceholder || product.title.charAt(0)}
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-brand-blue transition-colors">{product.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{product.description}</p>
                    {product.features && (
                        <ul className="mt-2 text-xs text-muted-foreground space-y-1">
                            {product.features.slice(0, 2).map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <span className="mr-2 h-1 w-1 rounded-full bg-brand-cyan" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-border/50">
                <Link
                    href={product.href}
                    className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-cyan"
                >
                    Ver detalles <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}
