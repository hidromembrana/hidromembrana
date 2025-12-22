"use client"

import { useQuoteCart, CartItem } from "@/components/providers/quote-cart-provider"
import { Button } from "@/components/ui/button"
import { Trash2, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartSummary() {
    const { items, removeItem } = useQuoteCart()

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center border rounded-2xl bg-muted/20 border-border/50 border-dashed">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tu cotización está vacía</h3>
                <p className="text-muted-foreground max-w-sm mb-8">
                    Agrega productos o servicios a tu proyecto para solicitar un presupuesto formal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button asChild variant="default" className="w-full sm:w-[160px]">
                        <Link href="/productos">Ver Productos</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-[160px]">
                        <Link href="/servicios">Ver Servicios</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Resumen de Cotización</h2>
            <div className="grid gap-4">
                {items.map((item) => (
                    <CartItemRow key={item.id} item={item} onRemove={() => removeItem(item.id)} />
                ))}
            </div>
        </div>
    )
}

function CartItemRow({ item, onRemove }: { item: CartItem; onRemove: () => void }) {
    const { product, config, quantity } = item

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg bg-card transition-all hover:bg-accent/5">
            {/* Image */}
            <div className="relative h-20 w-20 min-w-[5rem] rounded-md overflow-hidden bg-muted">
                {product.images && product.images.length > 0 ? (
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full w-full bg-muted text-muted-foreground font-bold">
                        {product.imagePlaceholder || "Img"}
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="flex-1 space-y-1">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-muted-foreground">
                    Cantidad: <span className="font-medium text-foreground">{quantity}</span>
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                    {/* Render Config Details */}
                    {config.length && <p>Dimensiones: {config.length}m x {config.width}m {config.height ? `x ${config.height}m` : ''}</p>}
                    {config.diameter && <p>Diámetro: {config.diameter}, Formato: {config.format}</p>}
                    {config.hasMaterial && (
                        <p>
                            Instalación: {config.hasMaterial === 'yes' ? 'Solo servicio' : 'Con material'}
                            {config.materialType ? ` (${config.materialType})` : ''}
                        </p>
                    )}
                </div>
            </div>

            {/* Actions */}
            <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-destructive"
                onClick={onRemove}
            >
                <Trash2 className="h-5 w-5" />
                <span className="sr-only">Eliminar</span>
            </Button>
        </div>
    )
}
