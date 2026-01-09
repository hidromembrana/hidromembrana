"use client"

import { LeadCaptureLink } from "@/components/lead-capture-link"
import { ArrowRight } from "lucide-react"

export function HeroCta() {
    return (
        <LeadCaptureLink
            href="/cotizar"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-brand-blue px-10 text-base font-bold text-white shadow-lg transition-all hover:bg-brand-cyan hover:scale-105 hover:shadow-brand-blue/25 w-full sm:w-auto"
        >
            <span className="flex items-center gap-2">
                Solicitar Cotización Rápida
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
        </LeadCaptureLink>
    )
}
