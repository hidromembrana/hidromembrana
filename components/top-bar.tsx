import { Truck, Clock, Phone } from "lucide-react"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { CONTACT_INFO } from "@/lib/config"

export function TopBar() {
    return (
        <div className="hidden w-full bg-brand-blue py-2 text-[10px] font-medium text-white sm:block sm:text-xs">
            <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 md:flex-row">
                <div className="flex flex-wrap items-center justify-center gap-4 text-center md:justify-start">
                    <div className="flex items-center gap-1.5">
                        <Truck className="h-3.5 w-3.5" />
                        <span>Despacho a todo Chile</span>
                    </div>
                    <div className="hidden h-3 w-px bg-white/30 sm:block" />
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Lunes a Viernes: 09:00 - 18:00 hrs</span>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
                    <Link
                        href={`tel:${CONTACT_INFO.whatsapp.raw}`}
                        className="flex items-center gap-1.5 transition-colors hover:text-brand-cyan"
                    >
                        <Phone className="h-3.5 w-3.5" />
                        <span>{CONTACT_INFO.whatsapp.number}</span>
                    </Link>
                    <div className="hidden h-3 w-px bg-white/30 sm:block" />
                    <Link
                        href={CONTACT_INFO.whatsapp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 transition-colors hover:text-brand-cyan"
                    >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        <span>WhatsApp Ventas</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
