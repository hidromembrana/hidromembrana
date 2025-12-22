"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { Product } from "@/lib/products"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export interface QuoteItemConfig {
    // Geosynthetics
    length?: string
    width?: string
    height?: string
    anchorage?: string

    // Installation
    hasMaterial?: "yes" | "no"
    materialType?: string

    // Welding
    diameter?: string
    format?: string
}

export interface CartItem {
    id: string
    product: Product
    config: QuoteItemConfig
    quantity: number
}

interface QuoteCartContextType {
    items: CartItem[]
    points: number // Optional: just for tracking count easily
    addItem: (product: Product, config: QuoteItemConfig, quantity?: number) => void
    removeItem: (itemId: string) => void
    updateItem: (itemId: string, config: Partial<QuoteItemConfig>) => void
    clearCart: () => void
}

const QuoteCartContext = createContext<QuoteCartContextType | undefined>(undefined)

// --- Provider ---

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const router = useRouter()

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("quote-cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart from local storage", e)
            }
        }
        setIsLoaded(true)
    }, [])

    // Save to localStorage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("quote-cart", JSON.stringify(items))
        }
    }, [items, isLoaded])

    const addItem = (product: Product, config: QuoteItemConfig, quantity: number = 1) => {
        const newItem: CartItem = {
            id: crypto.randomUUID(),
            product,
            config,
            quantity,
        }

        setItems((prev) => [...prev, newItem])
        toast.success("Producto agregado a la cotización", {
            action: {
                label: "Ver",
                onClick: () => router.push("/cotizar")
            }
        })
    }

    const removeItem = (itemId: string) => {
        setItems((prev) => prev.filter((item) => item.id !== itemId))
        toast.success("Producto eliminado")
    }

    const updateItem = (itemId: string, config: Partial<QuoteItemConfig>) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === itemId
                    ? { ...item, config: { ...item.config, ...config } }
                    : item
            )
        )
    }

    const clearCart = () => {
        setItems([])
        localStorage.removeItem("quote-cart")
    }

    return (
        <QuoteCartContext.Provider value={{
            items,
            points: items.length,
            addItem,
            removeItem,
            updateItem,
            clearCart
        }}>
            {children}
        </QuoteCartContext.Provider>
    )
}

// --- Hook ---

export function useQuoteCart() {
    const context = useContext(QuoteCartContext)
    if (context === undefined) {
        throw new Error("useQuoteCart must be used within a QuoteCartProvider")
    }
    return context
}
