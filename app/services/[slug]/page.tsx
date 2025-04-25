import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, BarChart2, Search, Radio, Target, TrendingUp, CheckCircle } from "lucide-react"

type ServicePageProps = {
  params: {
    slug: string
  }
}

const services = {
  "media-services": {
    title: "Media Services",
    description:
      "Strategic planning and execution of media campaigns across various platforms to maximize your brand's visibility and engagement.",
    icon: Radio,
    longDescription:
      "Our media services team specializes in creating and implementing comprehensive media strategies that help your brand reach the right audience at the right time. We leverage our expertise in various media channels to ensure maximum visibility and engagement for your brand.",
    benefits: [
      "Increased brand visibility across multiple platforms",
      "Strategic media planning tailored to your target audience",
      "Optimized media spend for maximum ROI",
      "Regular performance reporting and optimization",
      "Access to premium media placements and partnerships",
    ],
    process: [
      "Media audit and analysis",
      "Strategy development",
      "Media planning and buying",
      "Campaign execution",
      "Performance monitoring and optimization",
      "Reporting and insights",
    ],
  },
  "performance-marketing": {
    title: "Performance Marketing",
    description:
      "Data-driven marketing strategies focused on measurable results, optimizing your campaigns for maximum ROI.",
    icon: BarChart2,
    longDescription:
      "Our performance marketing services are designed to drive measurable results for your business. We use data-driven strategies to optimize your marketing campaigns for maximum return on investment, focusing on key performance indicators that matter to your business.",
    benefits: [
      "Measurable results and clear ROI",
      "Data-driven decision making",
      "Continuous optimization based on performance",
      "Transparent reporting and insights",
      "Focus on conversion and customer acquisition",
    ],
    process: [
      "Performance audit and goal setting",
      "Strategy development",
      "Campaign setup and tracking implementation",
      "Continuous testing and optimization",
      "Regular performance reporting",
      "Strategic recommendations",
    ],
  },
  seo: {
    title: "SEO",
    description:
      "Comprehensive search engine optimization services to improve your website's visibility and drive organic traffic.",
    icon: Search,
    longDescription:
      "Our SEO services are designed to improve your website's visibility in search engine results, driving more organic traffic to your site. We use a combination of technical SEO, on-page optimization, and content strategy to help your website rank higher for relevant keywords.",
    benefits: [
      "Improved search engine rankings",
      "Increased organic traffic",
      "Enhanced website user experience",
      "Higher quality leads and conversions",
      "Long-term sustainable results",
    ],
    process: [
      "Comprehensive SEO audit",
      "Keyword research and strategy",
      "Technical SEO optimization",
      "On-page SEO implementation",
      "Content strategy and creation",
      "Link building and off-page SEO",
      "Regular reporting and analysis",
    ],
  },
  "contextual-ads": {
    title: "Contextual Ads",
    description:
      "Targeted advertising solutions that display your ads in relevant contexts, increasing relevance and conversion rates.",
    icon: Target,
    longDescription:
      "Our contextual advertising services help you reach potential customers when they're most receptive to your message. By displaying your ads in contexts that are relevant to your products or services, we increase the effectiveness of your advertising campaigns and drive higher conversion rates.",
    benefits: [
      "Higher relevance and engagement",
      "Improved conversion rates",
      "Brand safety and contextual alignment",
      "Efficient ad spend with targeted placements",
      "Reduced ad fatigue and banner blindness",
    ],
    process: [
      "Audience and context analysis",
      "Contextual targeting strategy",
      "Ad creative development",
      "Campaign setup and targeting",
      "Performance monitoring and optimization",
      "Regular reporting and insights",
    ],
  },
  "demand-providing": {
    title: "Demand Providing",
    description:
      "Strategic approaches to generate and nurture demand for your products or services in your target market.",
    icon: TrendingUp,
    longDescription:
      "Our demand generation services help you create awareness and interest in your products or services among your target audience. We use a combination of content marketing, lead generation, and nurturing strategies to build a pipeline of qualified leads for your business.",
    benefits: [
      "Increased brand awareness and market presence",
      "Quality lead generation and nurturing",
      "Shortened sales cycles",
      "Improved sales and marketing alignment",
      "Sustainable pipeline of qualified prospects",
    ],
    process: [
      "Market and audience analysis",
      "Demand generation strategy development",
      "Content creation and distribution",
      "Lead capture and qualification",
      "Lead nurturing and scoring",
      "Sales handoff and pipeline management",
      "Performance analysis and optimization",
    ],
  },
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  const ServiceIcon = service.icon

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-12">
        <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to all services
        </Link>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-4 rounded-full">
              <ServiceIcon className="h-8 w-8 text-orange-500" />
            </div>
            <h1 className="text-4xl font-bold">{service.title}</h1>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl">{service.description}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Image
              src={`/abstract-geometric-shapes.png?height=400&width=600&query=${service.title} digital marketing service`}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-muted-foreground">{service.longDescription}</p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Key Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Process</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold">{step}</h3>
                </div>
                <p className="text-muted-foreground">
                  Our expert team will guide you through this step to ensure optimal results for your business.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-500 text-white p-8 md:p-12 rounded-lg text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Contact us today to learn more about our {service.title.toLowerCase()} and how we can help your business
            grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white text-orange-500 px-6 py-3 font-medium hover:bg-orange-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
