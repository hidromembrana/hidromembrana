"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LeadCaptureLink } from "@/components/lead-capture-link"

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
]

import { useQuoteCart } from "@/components/providers/quote-cart-provider"
import { ShoppingCart } from "lucide-react"

function CartBadge() {
    const { points } = useQuoteCart()

    if (points === 0) return <ShoppingCart className="h-4 w-4" />

    return (
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-brand-blue text-xs font-bold">
            {points}
        </div>
    )
}

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-12 w-12">
                        <Image
                            src="/logo.png"
                            alt="Hidromembrana Logo"
                            fill
                            sizes="48px"
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold bg-[image:var(--image-brand-gradient)] bg-clip-text text-transparent">
                        Hidromembrana
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    {/* Show links only if NOT on home page */}
                    {pathname !== "/" && navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-brand-blue ${pathname === link.href
                                ? "text-brand-blue"
                                : "text-muted-foreground"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <LeadCaptureLink
                        href="/cotizar"
                        className="relative rounded-full bg-brand-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-cyan flex items-center gap-2"
                    >
                        <span>Cotizar</span>
                        <CartBadge />
                    </LeadCaptureLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Menu</span>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="border-t border-border bg-background md:hidden">
                    <div className="container mx-auto flex flex-col space-y-4 p-4">
                        {pathname !== "/" && navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-base font-medium transition-colors hover:text-brand-blue ${pathname === link.href
                                    ? "text-brand-blue"
                                    : "text-muted-foreground"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center justify-between">
                            <LeadCaptureLink
                                href="/cotizar"
                                className="inline-flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white hover:bg-brand-cyan"
                                onClick={() => setIsOpen(false)}
                            >
                                Cotizar
                                <div className="ml-2 inline-flex">
                                    <CartBadge />
                                </div>
                            </LeadCaptureLink>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
