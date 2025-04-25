import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FeaturedWorksSection() {
  const works = [
    {
      id: "hoome-real-estate",
      title: "Hoome",
      description: "Real estate platform redesign",
      image: "real estate platform analytics chart",
      chartType: "bar-chart",
    },
    {
      id: "taskly-productivity",
      title: "Task.ly",
      description: "Productivity app UI/UX design",
      image: "productivity app user engagement metrics",
      chartType: "line-chart",
    },
    {
      id: "manner-fashion",
      title: "Manner",
      description: "Fashion e-commerce website",
      image: "fashion ecommerce sales growth chart",
      chartType: "area-chart",
    },
    {
      id: "ecotech-sustainable",
      title: "EcoTech",
      description: "Sustainable technology branding",
      image: "sustainable technology market share pie chart",
      chartType: "pie-chart",
    },
    {
      id: "fitlife-fitness",
      title: "FitLife",
      description: "Fitness app marketing campaign",
      image: "fitness app user acquisition funnel",
      chartType: "funnel-chart",
    },
    {
      id: "culinary-restaurant",
      title: "Culinary",
      description: "Restaurant chain digital strategy",
      image: "restaurant digital marketing performance dashboard",
      chartType: "dashboard-chart", // Change from "dashboard" to "dashboard-chart"
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FEATURED WORKS</h2>
          <p className="text-xl text-muted-foreground">
            Check out some of our recent projects and see how we've helped our clients achieve their digital marketing
            goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Card key={work.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image src={`/charts/${work.chartType}.png`} alt={work.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4 flex-1">
                <h3 className="font-bold">{work.title}</h3>
                <p className="text-sm text-muted-foreground">{work.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/works/${work.id}`} className="flex items-center justify-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
