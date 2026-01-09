"use client"

import { useState } from "react"
import { useQuoteCart } from "@/components/providers/quote-cart-provider"
import { useRouter } from "next/navigation"
import { LeadCaptureDialog } from "@/components/forms/lead-capture-dialog"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function HeroCta() {
    const [showLeadModal, setShowLeadModal] = useState(false)
    const { contactInfo } = useQuoteCart()
    const router = useRouter()

    const handleCtaClick = () => {
        if (!contactInfo.isSaved) {
            setShowLeadModal(true)
        } else {
            router.push("/productos")
        }
    }

    const handleLeadSuccess = () => {
        setShowLeadModal(false)
        router.push("/productos")
    }

    return (
        <>
            <LeadCaptureDialog
                open={showLeadModal}
                onOpenChange={setShowLeadModal}
                onSuccess={handleLeadSuccess}
            />

            <Button
                onClick={handleCtaClick}
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-brand-blue px-10 text-base font-bold text-white shadow-lg transition-all hover:bg-brand-cyan hover:scale-105 hover:shadow-brand-blue/25 w-full sm:w-auto"
            >
                <span className="flex items-center gap-2">
                    Solicitar Cotización Rápida
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
            </Button>
        </>
    )
}
