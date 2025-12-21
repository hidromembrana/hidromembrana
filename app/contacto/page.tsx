import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export const metadata = {
    title: "Contacto | Hidromembrana",
    description: "Contáctanos para resolver tus dudas sobre geomembranas y servicios.",
}

export default function ContactoPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Hablemos</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        ¿Tienes dudas generales o necesitas información rápida?
                        Completa el formulario y te responderemos a la brevedad.
                        Para cotizaciones formales, por favor usa nuestro <a href="/cotizar" className="text-primary hover:underline font-medium">Cotizador</a>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Columna Izquierda: Información de Contacto */}
                    <div className="space-y-8 lg:col-span-1">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">Teléfono / WhatsApp</p>
                                        <a href="https://wa.me/56998131298" className="text-muted-foreground hover:text-primary transition-colors">
                                            +56 9 9813 1298
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:contacto@hidromembrana.cl" className="text-muted-foreground hover:text-primary transition-colors">
                                            contacto@hidromembrana.cl
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">Ubicación</p>
                                        <p className="text-muted-foreground">
                                            Región Metropolitana, Chile.<br />
                                            Atendemos a todo el país.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">Horario de Atención</p>
                                        <p className="text-muted-foreground">
                                            Lunes a Viernes: 9:00 - 18:00 hrs.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Columna Derecha: Formulario */}
                    <div className="lg:col-span-2 bg-card rounded-2xl p-6 md:p-8 shadow-sm border">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
