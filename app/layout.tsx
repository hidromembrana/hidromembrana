import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { TopBar } from "@/components/top-bar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { IS_UNDER_CONSTRUCTION } from "@/lib/config";
import { UnderConstruction } from "@/components/under-construction";
import { GoogleAnalytics } from '@next/third-parties/google'

import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hidromembrana.cl'),

  title: {
    default: "Hidromembrana | Venta e Instalación de Geomembranas en Chile",
    template: "%s | Hidromembrana",
  },

  description: "Expertos en venta e instalación de geomembrana HDPE, geotextil y polylock. Servicios de termofusión, soldadura y reparaciones en todo Chile.",

  keywords: [
    "geomembrana",
    "geotextil",
    "polylock",
    "soldadura HDPE",
    "instalación de geomembrana",
    "termofusión",
    "reparación de piscinas agrícolas",
    "Chile"
  ],

  openGraph: {
    title: "Hidromembrana - Soluciones en Geosintéticos",
    description: "Venta e instalación profesional. Cotiza tu proyecto con nosotros.",
    url: 'https://www.hidromembrana.cl',
    siteName: 'Hidromembrana',
    locale: 'es_CL',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const gaId = process.env.GOOGLE_ANALYTICS_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {IS_UNDER_CONSTRUCTION ? (
            <UnderConstruction />
          ) : (
            <div className="flex min-h-screen flex-col">
              <TopBar />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
          )}
          <Toaster />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
