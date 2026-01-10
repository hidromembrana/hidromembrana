import Image from "next/image"
import { cn } from "@/lib/utils"

interface WhatsAppIconProps {
    className?: string
}

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
    return (
        <div className={cn("relative aspect-square", className)}>
            <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    )
}
