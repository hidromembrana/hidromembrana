import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative flex min-h-[600px] flex-col justify-center overflow-hidden py-20 md:py-32">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/hero.png"
                    alt="Instalación profesional de geomembranas"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/60" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-8 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                            Soluciones Integrales en <br />
                            <span className="bg-brand-gradient bg-clip-text text-transparent">
                                Impermeabilización
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[600px] text-lg text-zinc-200 md:text-xl">
                            Expertos en venta e instalación de geomembranas, geotextiles y sistemas de contención para proyectos de ingeniería y construcción.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/contacto"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-brand-blue px-8 text-sm font-medium text-white shadow transition-colors hover:bg-brand-cyan focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Solicitar Cotización
                        </Link>
                        <Link
                            href="/productos"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Ver Productos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
