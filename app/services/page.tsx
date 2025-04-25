import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Search, Radio, Target, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive range of digital marketing services designed to help your business grow.",
}

const services = [
  {
    id: "media-services",
    title: "Media Services",
    description:
      "Strategic planning and execution of media campaigns across various platforms to maximize your brand's visibility and engagement.",
    icon: Radio,
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Data-driven marketing strategies focused on measurable results, optimizing your campaigns for maximum ROI.",
    icon: BarChart2,
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Comprehensive search engine optimization services to improve your website's visibility and drive organic traffic.",
    icon: Search,
  },
  {
    id: "contextual-ads",
    title: "Contextual Ads",
    description:
      "Targeted advertising solutions that display your ads in relevant contexts, increasing relevance and conversion rates.",
    icon: Target,
  },
  {
    id: "demand-providing",
    title: "Demand Providing",
    description:
      "Strategic approaches to generate and nurture demand for your products or services in your target market.",
    icon: TrendingUp,
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive range of digital marketing services designed to help your business grow and succeed
            in the digital landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full">
              <CardContent className="p-6 flex-1 space-y-4">
                <div className="bg-orange-100 p-4 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="gap-2">
                  <Link href={`/services/${service.id}`}>
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
