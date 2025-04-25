import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "PixStudioCo | Digital Marketing Agency",
    template: "%s | PixStudioCo",
  },
  description: "We help brands thrive in the ever-evolving digital landscape with innovative marketing solutions.",
  keywords: ["digital marketing", "SEO", "performance marketing", "media services", "contextual ads"],
  authors: [{ name: "PixStudioCo" }],
  creator: "PixStudioCo",
  publisher: "PixStudioCo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pixstudioco.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PixStudioCo | Digital Marketing Agency",
    description: "We help brands thrive in the ever-evolving digital landscape with innovative marketing solutions.",
    url: "https://pixstudioco.com",
    siteName: "PixStudioCo",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
