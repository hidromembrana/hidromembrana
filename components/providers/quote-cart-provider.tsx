"use client"

import { useEffect, useState } from "react"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { Product } from "@/lib/products"
import { toast } from "sonner"

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

export interface ContactInfo {
    name: string
    email: string
    phone: string
    isSaved: boolean
}

export interface CartItem {
    id: string
    product: Product
    config: QuoteItemConfig
    quantity: number
}

interface QuoteCartState {
    items: CartItem[]
    contactInfo: ContactInfo
    addItem: (product: Product, config: QuoteItemConfig, quantity?: number) => void
    removeItem: (itemId: string) => void
    updateItem: (itemId: string, config: Partial<QuoteItemConfig>) => void
    saveContactInfo: (info: ContactInfo) => void
    clearCart: () => void
    reset: () => void
}

const useQuoteCartStore = create<QuoteCartState>()(
    persist(
        (set) => ({
            items: [],
            contactInfo: { name: "", email: "", phone: "", isSaved: false },
            addItem: (product, config, quantity = 1) => {
                set((state) => ({
                    items: [
                        ...state.items,
                        {
                            id: crypto.randomUUID(),
                            product,
                            config,
                            quantity,
                        },
                    ],
                }))
            },
            removeItem: (itemId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== itemId),
                }))
                toast.success("Producto eliminado")
            },
            updateItem: (itemId, config) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === itemId
                            ? { ...item, config: { ...item.config, ...config } }
                            : item
                    ),
                })),
            saveContactInfo: (info) => set({ contactInfo: info }),
            clearCart: () => {
                set({ items: [] })
                localStorage.removeItem("quote-cart")
            },
            reset: () => {
                set({ items: [], contactInfo: { name: "", email: "", phone: "", isSaved: false } })
                localStorage.removeItem("quote-cart")
            }
        }),
        {
            name: "quote-cart",
            storage: createJSONStorage(() => localStorage),
            skipHydration: true,
        }
    )
)

export function useQuoteCart() {
    const store = useQuoteCartStore()
    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useQuoteCartStore.persist.rehydrate()
        setIsHydrated(true)
    }, [])

    return {
        ...store,
        items: isHydrated ? store.items : [],
        points: isHydrated ? store.items.length : 0,
    }
}

// Deprecated: No longer needs to wrap app, but keeping as fragment to avoid breaking imports immediately if used elsewhere
export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
