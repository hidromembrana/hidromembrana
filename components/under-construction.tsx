import Image from "next/image";

export function UnderConstruction() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
            {/* Optical alignment: shifting slightly left to balance asymmetrical logo */}
            <div className="mb-8 animate-pulse translate-x-5">
                <Image
                    src="/logo.png"
                    alt="Hidromembrana Logo"
                    width={300}
                    height={100}
                    className="h-auto w-auto"
                    priority
                />
            </div>
            <h1 className="mb-2 text-3xl font-bold font-bold bg-[image:var(--image-brand-gradient)] bg-clip-text text-transparent uppercase">
                Hidromembrana
            </h1>
            <h2 className="mb-4 text-xl font-semibold text-muted-foreground sm:text-2xl">
                Sitio en Construcción
            </h2>
            <p className="mb-8 text-muted-foreground sm:text-lg">
                Estamos preparando nuestro nuevo sitio web.
            </p>

            <div className="flex flex-col items-center gap-4">
                <p className="text-lg font-medium text-foreground">
                    ¡Seguimos atendiendo!
                </p>
                <a
                    href="https://wa.me/56998131298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50"
                >
                    <span className="flex items-center gap-2">
                        Conversemos por WhatsApp
                    </span>
                </a>
            </div>
        </div>
    );
}
