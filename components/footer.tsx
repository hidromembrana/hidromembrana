import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { CONTACT_INFO } from "@/lib/config"

export function Footer() {
    return (
        <footer className="border-t border-border bg-surface text-foreground">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="relative h-16 w-16">
                                <Image
                                    src="/logo.png"
                                    alt="Hidromembrana Logo"
                                    fill
                                    sizes="64px"
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold bg-[image:var(--image-brand-gradient)] bg-clip-text text-transparent">
                                Hidromembrana
                            </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Expertos en soluciones de impermeabilización y geosintéticos. Calidad y confianza en cada proyecto.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-brand-blue">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-brand-blue">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-brand-blue">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-brand-blue">Inicio</Link>
                            </li>
                            <li>
                                <Link href="/productos" className="text-muted-foreground hover:text-brand-blue">Productos</Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="text-muted-foreground hover:text-brand-blue">Servicios</Link>
                            </li>
                            <li>
                                <Link href="/proyectos" className="text-muted-foreground hover:text-brand-blue">Proyectos</Link>
                            </li>
                            <li>
                                <Link href="/nosotros" className="text-muted-foreground hover:text-brand-blue">Sobre Nosotros</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Legales</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/terminos" className="text-muted-foreground hover:text-brand-blue">
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacidad" className="text-muted-foreground hover:text-brand-blue">
                                    Políticas de Privacidad
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-brand-blue shrink-0" />
                                <span className="text-muted-foreground">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-brand-blue shrink-0" />
                                <span className="text-muted-foreground">{CONTACT_INFO.whatsapp.number}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                                <span className="text-muted-foreground">{CONTACT_INFO.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-border bg-background py-6">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Hidromembrana. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}
