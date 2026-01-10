"use client"

import { Product } from "@/lib/products"
import { AddToCartDialog } from "./add-to-cart-dialog"

interface AddToCartButtonProps {
    product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    // Siempre renderizar el botón envuelto en AddToCartDialog
    // AddToCartDialog maneja internamente la hidratación correctamente
    return (
        <AddToCartDialog product={product}>
            <button 
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white hover:bg-brand-cyan transition-colors cursor-pointer"
                type="button"
            >
                Cotizar {product.title}
            </button>
        </AddToCartDialog>
    )
}
