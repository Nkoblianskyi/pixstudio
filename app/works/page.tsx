import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Works",
  description: "Explore our portfolio of successful projects and case studies.",
}

const works = [
  {
    id: "hoome-real-estate",
    title: "Hoome",
    subtitle: "Real Estate Platform Redesign",
    description:
      "A comprehensive redesign of a leading real estate platform to improve user experience and conversion rates.",
    chartType: "bar-chart",
  },
  {
    id: "taskly-productivity",
    title: "Task.ly",
    subtitle: "Productivity App UI/UX Design",
    description:
      "A complete overhaul of a productivity application's user interface and experience to increase user retention and satisfaction.",
    chartType: "line-chart",
  },
  {
    id: "manner-fashion",
    title: "Manner",
    subtitle: "Fashion E-commerce Website",
    description:
      "A stylish and high-performing e-commerce platform for a premium fashion brand focused on conversion optimization.",
    chartType: "area-chart",
  },
  {
    id: "ecotech-sustainable",
    title: "EcoTech",
    subtitle: "Sustainable Technology Branding",
    description:
      "A comprehensive branding strategy for a sustainable technology company entering a competitive market.",
    chartType: "pie-chart",
  },
  {
    id: "fitlife-fitness",
    title: "FitLife",
    subtitle: "Fitness App Marketing Campaign",
    description:
      "A multi-channel marketing campaign for a fitness application focused on user acquisition and engagement.",
    chartType: "funnel-chart",
  },
  {
    id: "culinary-restaurant",
    title: "Culinary",
    subtitle: "Restaurant Chain Digital Strategy",
    description: "A comprehensive digital transformation strategy for a growing restaurant chain.",
    chartType: "dashboard-chart", // Change from "dashboard" to "dashboard-chart"
  },
]

export default function WorksPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Works</h1>
          <p className="text-xl text-muted-foreground">
            Explore our portfolio of successful projects and see how we've helped our clients achieve their digital
            marketing goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Card key={work.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image src={`/charts/${work.chartType}.png`} alt={work.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex-1 space-y-4">
                <div>
                  <h2 className="text-xl font-bold">{work.title}</h2>
                  <p className="text-orange-500">{work.subtitle}</p>
                </div>
                <p className="text-muted-foreground">{work.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/works/${work.id}`} className="flex items-center justify-center gap-2">
                    View Case Study <ArrowRight className="h-4 w-4" />
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
