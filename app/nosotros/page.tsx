import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"
import { Target, Eye, ShieldCheck, Zap, Users, Leaf } from "lucide-react"
import Image from "next/image"

export const metadata = {
    title: "Nosotros | Hidromembrana",
    description: "Conozca más sobre nuestra empresa, misión, visión y compromiso con la calidad en impermeabilización.",
}

export default function NosotrosPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Sobre Nosotros"
                description="Líderes en soluciones de impermeabilización con más de 10 años de experiencia en el mercado nacional."
            />

            {/* Mission & Vision Section */}
            <section className="py-12 md:py-16 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center rounded-lg bg-brand-blue/10 px-3 py-1 text-sm font-medium text-brand-blue">
                            Nuestra Identidad
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Ingeniería y Calidad <br />
                            <span className="text-muted-foreground">al servicio de su proyecto</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            En Hidromembrana nos especializamos en el suministro e instalación de geosintéticos de alta gama.
                            Nuestro enfoque técnico y compromiso con la excelencia nos ha permitido participar en los proyectos
                            más exigentes de la minería, agricultura y construcción en Chile.
                        </p>

                        <div className="grid gap-6 mt-8">
                            <div className="flex gap-4 items-start p-4 rounded-xl bg-surface border shadow-sm">
                                <div className="mt-1 bg-brand-blue/10 p-2 rounded-lg">
                                    <Target className="h-6 w-6 text-brand-blue" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Misión</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Proveer soluciones integrales de impermeabilización que garanticen la
                                        seguridad hídrica y ambiental de nuestros clientes, mediante productos certificados
                                        y un servicio de instalación de clase mundial.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start p-4 rounded-xl bg-surface border shadow-sm">
                                <div className="mt-1 bg-brand-cyan/10 p-2 rounded-lg">
                                    <Eye className="h-6 w-6 text-brand-cyan" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visión</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Ser reconocidos como el referente técnico en geosintéticos en Chile,
                                        impulsando la innovación y sustentabilidad en cada metro cuadrado instalado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent z-10 mix-blend-multiply" />
                        <Image
                            src="/hero.webp"
                            alt="Equipo de Hidromembrana en terreno"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-muted/30 border-y border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Nuestros Valores</h2>
                        <p className="text-muted-foreground text-lg">
                            Los pilares fundamentales que guían cada decisión y proyecto que emprendemos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Calidad Certificada",
                                description: "No transamos con la calidad. Trabajamos solo con materiales que cumplen normas internacionales (GRI-GM13).",
                                icon: ShieldCheck,
                                color: "text-blue-500"
                            },
                            {
                                title: "Rapidez de Respuesta",
                                description: "Entendemos la urgencia de su obra. Nuestro stock permanente nos permite despachar en tiempo récord.",
                                icon: Zap,
                                color: "text-amber-500"
                            },
                            {
                                title: "Equipo Experto",
                                description: "Técnicos calificados y en constante capacitación para asegurar soldaduras perfectas.",
                                icon: Users,
                                color: "text-cyan-500"
                            },
                            {
                                title: "Sustentabilidad",
                                description: "Comprometidos con el cuidado del agua y el medio ambiente a través de soluciones duraderas.",
                                icon: Leaf,
                                color: "text-green-500"
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                                <value.icon className={`h-10 w-10 ${value.color} mb-4`} />
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Stats (Optional placeholder for now could be stats) */}
            {/* Why Choose Us */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            ¿Por qué elegir Hidromembrana?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Más que proveedores, somos socios estratégicos en su proyecto.
                        </p>
                    </div>

                    <ul className="grid gap-6 sm:grid-cols-2">
                        {[
                            "Stock permanente de bobinas",
                            "Despacho a todo Chile",
                            "Asesoría técnica gratuita",
                            "Equipos de termofusión propios",
                            "Garantía de instalación",
                            "Atención personalizada"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-transparent hover:border-brand-blue/20 transition-colors">
                                <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="h-5 w-5 text-brand-blue" />
                                </div>
                                <span className="font-semibold text-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CtaSection />
        </div>
    )
}
