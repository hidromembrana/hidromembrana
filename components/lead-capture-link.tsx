"use client"

import { useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { useQuoteCart } from "@/components/providers/quote-cart-provider"
import { LeadCaptureDialog } from "@/components/forms/lead-capture-dialog"

interface LeadCaptureLinkProps extends LinkProps {
    children: React.ReactNode
    className?: string
    // Allow any other props valid for HTMLAnchorElement not covered by LinkProps
    [key: string]: any
}

export function LeadCaptureLink({ children, href, onClick, ...props }: LeadCaptureLinkProps) {
    const [showModal, setShowModal] = useState(false)
    const { contactInfo } = useQuoteCart()
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // If contact info is not saved, prevent navigation and show modal
        if (!contactInfo.isSaved) {
            e.preventDefault()
            setShowModal(true)
            // Functionality fix: Do NOT call onClick here if it causes parent unmounting (like mobile menu close)
            return
        }

        // Call original onClick if provided
        if (onClick) {
            onClick(e)
        }
    }

    const handleSuccess = () => {
        setShowModal(false)
        router.push(href.toString())
    }

    return (
        <>
            <Link href={href} onClick={handleClick} {...props}>
                {children}
            </Link>
            <LeadCaptureDialog
                open={showModal}
                onOpenChange={setShowModal}
                onSuccess={handleSuccess}
            />
        </>
    )
}
