"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
    router.push("/cookie-policy")
  }

  const closeBanner = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg z-50 p-4 md:p-6">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <h3 className="font-bold mb-2">We use cookies</h3>
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
            traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
            <Link href="/cookie-policy" className="text-orange-500 hover:underline">
              Read our Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={acceptCookies} size="sm">
            Accept All
          </Button>
          <Button onClick={declineCookies} variant="outline" size="sm">
            Decline
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={closeBanner}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  )
}
