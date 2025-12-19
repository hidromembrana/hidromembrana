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
            <p className="text-muted-foreground sm:text-lg">
                Estamos preparando nuestro nuevo sitio web. ¡Pronto estaremos con ustedes!
            </p>
        </div>
    );
}
