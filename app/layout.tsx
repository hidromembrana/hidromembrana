import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { TopBar } from "@/components/top-bar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { IS_UNDER_CONSTRUCTION } from "@/lib/config";
import { UnderConstruction } from "@/components/under-construction";
import { QuoteCartProvider } from "@/components/providers/quote-cart-provider";
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
  title: "Hidromembrana",
  description: "Venta de geomembrana, geotextil y servicios de instalación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QuoteCartProvider>
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
          </QuoteCartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
