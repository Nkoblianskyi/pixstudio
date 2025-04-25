import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">PixStudioCo</h3>
            <p className="text-muted-foreground">
              We help brands thrive in the ever-evolving digital landscape with innovative marketing solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Na Příkopě 15, 110 00 Praha 1, Czech Republic</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@pixstudioco.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+420 123 456 789</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/media-services" className="text-muted-foreground hover:text-foreground">
                  Media Services
                </Link>
              </li>
              <li>
                <Link href="/services/performance-marketing" className="text-muted-foreground hover:text-foreground">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-foreground">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/services/contextual-ads" className="text-muted-foreground hover:text-foreground">
                  Contextual Ads
                </Link>
              </li>
              <li>
                <Link href="/services/demand-providing" className="text-muted-foreground hover:text-foreground">
                  Demand Providing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} PixStudioCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
