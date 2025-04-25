import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-orange-500 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            LET'S MAGNETIZE YOUR ONLINE PRESENCE WITH OUR CREATIVE PROWESS AND EXPERT STRATEGIES
          </h2>
          <p className="text-xl">
            Ready to take your digital marketing to the next level? Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-orange-500 hover:bg-orange-50 hover:text-orange-600 border-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-white hover:bg-orange-600 hover:text-white">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
