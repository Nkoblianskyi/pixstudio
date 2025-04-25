import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, BarChart2, Search, Radio, Target, TrendingUp } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      id: "media-services",
      title: "Media Services",
      description: "Strategic planning and execution of media campaigns across various platforms.",
      icon: Radio,
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description: "Data-driven marketing strategies focused on measurable results and ROI.",
      icon: BarChart2,
    },
    {
      id: "seo",
      title: "SEO",
      description: "Comprehensive search engine optimization services to improve visibility.",
      icon: Search,
    },
    {
      id: "contextual-ads",
      title: "Contextual Ads",
      description: "Targeted advertising solutions that display your ads in relevant contexts.",
      icon: Target,
    },
    {
      id: "demand-providing",
      title: "Demand Providing",
      description: "Strategic approaches to generate demand for your products or services.",
      icon: TrendingUp,
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">WHAT WE DO</h2>
          <p className="text-xl text-muted-foreground">
            We're not your average marketing agency. We're a team of digital specialists who are passionate about
            helping businesses succeed online.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full">
              <CardContent className="p-6 flex-1 space-y-4">
                <div className="bg-orange-100 p-4 rounded-full w-fit">
                  <service.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  href={`/services/${service.id}`}
                  className="text-orange-500 font-medium inline-flex items-center gap-2 hover:text-orange-600"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
