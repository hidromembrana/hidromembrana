import Image from "next/image"

interface PageHeaderProps {
    title: string
    description?: string
    backgroundImage?: string
}

export function PageHeader({
    title,
    description,
    backgroundImage = "/hero.webp"
}: PageHeaderProps) {
    return (
        <section className="relative flex min-h-[200px] flex-col justify-center overflow-hidden py-12 md:py-16">
            {/* Background Image */}
            <div className="absolute inset-0 -z-30 select-none">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-brand-blue/90 via-brand-blue/80 to-brand-cyan/70" />
            <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-2xl">
                    <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-4 text-lg text-blue-100 md:text-xl font-medium leading-relaxed max-w-[600px]">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}
