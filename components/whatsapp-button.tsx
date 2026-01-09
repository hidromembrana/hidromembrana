"use client"

import Link from "next/link"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { CONTACT_INFO } from "@/lib/config"

export function WhatsAppButton() {
    return (
        <Link
            href={CONTACT_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Contactar por WhatsApp"
        >
            <WhatsAppIcon className="h-8 w-8" />
        </Link>
    )
}
