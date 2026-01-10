"use client"

import { useState } from "react"
import { toast } from "sonner"

type EmailType = 'contact' | 'lead' | 'quotation'

interface UseSendEmailResult {
    sendEmail: (type: EmailType, payload: any, token?: string) => Promise<boolean>
    isSubmitting: boolean
    isSuccess: boolean
    error: string | null
    reset: () => void
}

export function useSendEmail(): UseSendEmailResult {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const reset = () => {
        setIsSuccess(false)
        setError(null)
    }

    const sendEmail = async (type: EmailType, payload: any, token?: string): Promise<boolean> => {
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type,
                    payload,
                    token
                })
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || 'Error al enviar el correo');
            }

            setIsSuccess(true)
            return true
        } catch (err) {
            console.error('Email sending failed:', err)
            const message = err instanceof Error ? err.message : 'Error desconocido'
            setError(message)
            toast.error(message)
            return false
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        sendEmail,
        isSubmitting,
        isSuccess,
        error,
        reset
    }
}
