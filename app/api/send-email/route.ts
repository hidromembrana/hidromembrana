import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateContactEmail, generateLeadEmail, generateQuotationEmail } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

const LEADS_EMAIL = process.env.FROM_LEADS_EMAIL || 'onboarding@resend.dev';
const QUOTER_EMAIL = process.env.FROM_QUOTER_EMAIL || 'onboarding@resend.dev';
const CONTACT_EMAIL = process.env.FROM_CONTACT_FORM_EMAIL || 'onboarding@resend.dev';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, payload, token } = body;

        if (!type || !payload) {
            return NextResponse.json(
                { error: 'Missing type or payload' },
                { status: 400 }
            );
        }

        // Verify Turnstile Token for Contact Form
        if (type === 'contact') {
            if (!token) {
                return NextResponse.json(
                    { error: 'Captcha requerido' },
                    { status: 400 }
                );
            }

            const formData = new FormData();
            formData.append('secret', process.env.TURNSTILE_SECRET_KEY || '');
            formData.append('response', token);
            formData.append('remoteip', request.headers.get('x-forwarded-for') || '');

            const turnstileResult = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                method: 'POST',
                body: formData,
            });

            const outcome = await turnstileResult.json();
            if (!outcome.success) {
                return NextResponse.json(
                    { error: 'Captcha inválido' },
                    { status: 400 }
                );
            }
        }

        let fromEmail = '';
        let subject = '';
        let htmlContent = '';

        // Determine Sender and Subject based on type
        switch (type) {
            case 'lead':
                fromEmail = `Nuevo Lead <${LEADS_EMAIL}>`;
                subject = '🚀 Nuevo Lead Capturado';
                htmlContent = generateLeadEmail(payload);
                break;
            case 'quotation':
                fromEmail = `Cotización Web <${QUOTER_EMAIL}>`;
                subject = '💰 Nueva Solicitud de Cotización';
                htmlContent = generateQuotationEmail(payload);
                break;
            case 'contact':
                fromEmail = `Servicio al Cliente <${CONTACT_EMAIL}>`;
                subject = '📩 Nuevo Mensaje de Contacto';
                htmlContent = generateContactEmail(payload);
                break;
            default:
                return NextResponse.json(
                    { error: 'Invalid email type' },
                    { status: 400 }
                );
        }

        const data = await resend.emails.send({
            from: fromEmail,
            to: process.env.EMAIL_TO as string,
            subject: subject,
            html: htmlContent,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
