"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
    images?: string[]
    title: string
    fallbackText?: string
}

export function ProductGallery({ images, title, fallbackText }: ProductGalleryProps) {
    // If no images or empty array, use fallback/placeholder logic handled by parent or here if preferred.
    // Assuming passed images are valid paths (e.g. starting with /).
    const validImages = images && images.length > 0 ? images : []
    const [selectedIndex, setSelectedIndex] = useState(0)

    if (validImages.length === 0) {
        return (
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-surface/50 border border-border flex items-center justify-center">
                <span className="text-9xl font-bold text-brand-blue/20">
                    {fallbackText || title.charAt(0)}
                </span>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface/50 border border-border group">
                <Image
                    src={validImages[selectedIndex]}
                    alt={`${title} - Vista ${selectedIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>

            {/* Thumbnails (only if more than 1 image) */}
            {validImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {validImages.map((image, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className={cn(
                                "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                                selectedIndex === i
                                    ? "border-brand-blue ring-2 ring-brand-blue/20"
                                    : "border-transparent opacity-70 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={image}
                                alt={`${title} - Thumbnail ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
