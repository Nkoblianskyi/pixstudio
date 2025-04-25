import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              BEGIN YOUR <span className="text-orange-500">DIGITAL ODYSSEY</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We help brands thrive in the ever-evolving digital landscape with innovative marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/connected-growth.png"
              alt="Digital Marketing"
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
