import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { use } from "react"

type WorkPageProps = {
  params: {
    slug: string
  }
}

const works = {
  "hoome-real-estate": {
    title: "Hoome",
    subtitle: "Real Estate Platform Redesign",
    description:
      "A comprehensive redesign of a leading real estate platform to improve user experience and conversion rates.",
    challenge:
      "Hoome was struggling with high bounce rates and low conversion on their property listings. The existing platform was outdated, difficult to navigate, and not optimized for mobile users, who made up over 60% of their traffic.",
    solution:
      "We conducted extensive user research and competitive analysis to identify pain points and opportunities. Our team then redesigned the entire platform with a focus on intuitive navigation, streamlined property search, and enhanced property visualization. We implemented a responsive design that works seamlessly across all devices.",
    results: [
      "45% increase in user engagement",
      "32% reduction in bounce rate",
      "28% improvement in conversion rate",
      "53% increase in mobile user satisfaction",
    ],
    services: ["UX/UI Design", "Responsive Web Development", "SEO Optimization", "Performance Optimization"],
    chartType: "bar-chart",
    chartDescription:
      "The bar chart shows the significant improvement in key metrics after the redesign, with user engagement and conversion rates showing the most dramatic increases.",
    additionalCharts: [
      {
        type: "line-chart",
        title: "User Engagement Over Time",
        description:
          "This chart shows the steady increase in user engagement metrics over the six months following the redesign launch.",
      },
      {
        type: "pie-chart",
        title: "Traffic Source Distribution",
        description:
          "The pie chart illustrates how the redesign affected traffic sources, with organic search and direct traffic showing significant growth.",
      },
    ],
  },
  "taskly-productivity": {
    title: "Task.ly",
    subtitle: "Productivity App UI/UX Design",
    description:
      "A complete overhaul of a productivity application's user interface and experience to increase user retention and satisfaction.",
    challenge:
      "Task.ly was losing users to competitors due to an outdated interface and complex user flows. The app had powerful features but users found them difficult to discover and use effectively.",
    solution:
      "We simplified the user interface while maintaining all functionality, created intuitive navigation patterns, and implemented a guided onboarding process. Our team also developed a new visual design system that aligned with current design trends while maintaining the brand's identity.",
    results: [
      "67% increase in daily active users",
      "42% improvement in user retention",
      "58% increase in feature discovery",
      "4.8/5 average app store rating (up from 3.6)",
    ],
    services: ["UI/UX Design", "User Research", "Interaction Design", "Usability Testing"],
    chartType: "line-chart",
    chartDescription:
      "The line chart demonstrates the steady growth in daily active users and retention rates following the UI/UX redesign.",
    additionalCharts: [
      {
        type: "area-chart",
        title: "Feature Usage Distribution",
        description:
          "This area chart shows how the redesign improved the discovery and usage of previously underutilized features.",
      },
      {
        type: "bar-chart",
        title: "User Satisfaction Metrics",
        description:
          "The bar chart compares user satisfaction metrics before and after the redesign across different aspects of the application.",
      },
    ],
  },
  "manner-fashion": {
    title: "Manner",
    subtitle: "Fashion E-commerce Website",
    description:
      "A stylish and high-performing e-commerce platform for a premium fashion brand focused on conversion optimization.",
    challenge:
      "Manner was transitioning from brick-and-mortar to online sales and needed an e-commerce platform that would reflect their premium brand identity while delivering excellent conversion rates and customer experience.",
    solution:
      "We designed and developed a custom e-commerce platform with sophisticated product visualization, streamlined checkout process, and personalized recommendation engine. The site features high-quality imagery, intuitive navigation, and seamless integration with their inventory management system.",
    results: [
      "124% increase in online sales",
      "38% higher average order value",
      "27% improvement in cart completion rate",
      "42% increase in return customer rate",
    ],
    services: [
      "E-commerce Strategy",
      "Custom Web Development",
      "Payment Gateway Integration",
      "Performance Optimization",
    ],
    chartType: "area-chart",
    chartDescription:
      "The area chart illustrates the dramatic growth in online sales and revenue following the launch of the new e-commerce platform.",
    additionalCharts: [
      {
        type: "bar-chart",
        title: "Conversion Funnel Analysis",
        description:
          "This chart breaks down the improvement in conversion rates at each stage of the customer journey.",
      },
      {
        type: "line-chart",
        title: "Revenue Growth Trajectory",
        description:
          "The line chart shows the consistent upward trend in revenue over the 12 months following the site launch.",
      },
    ],
  },
  "ecotech-sustainable": {
    title: "EcoTech",
    subtitle: "Sustainable Technology Branding",
    description:
      "A comprehensive branding strategy for a sustainable technology company entering a competitive market.",
    challenge:
      "EcoTech needed to establish a distinctive brand identity that would communicate their commitment to sustainability while positioning them as innovative leaders in the technology sector.",
    solution:
      "We developed a complete brand strategy including visual identity, messaging framework, and brand guidelines. Our approach focused on balancing eco-friendly values with cutting-edge technology, creating a unique position in the market that resonated with environmentally conscious consumers.",
    results: [
      "86% brand recognition in target market within 6 months",
      "42% increase in qualified leads",
      "35% higher engagement on digital channels",
      "28% improvement in conversion from awareness to consideration",
    ],
    services: ["Brand Strategy", "Visual Identity Design", "Messaging Framework", "Brand Guidelines"],
    chartType: "pie-chart",
    chartDescription:
      "The pie chart shows the market share gained by EcoTech within their target segment following the rebranding initiative.",
    additionalCharts: [
      {
        type: "bar-chart",
        title: "Brand Perception Metrics",
        description: "This chart compares key brand perception metrics before and after the rebranding effort.",
      },
      {
        type: "line-chart",
        title: "Brand Awareness Growth",
        description:
          "The line chart tracks the growth in brand awareness among the target audience over the first year after launch.",
      },
    ],
  },
  "fitlife-fitness": {
    title: "FitLife",
    subtitle: "Fitness App Marketing Campaign",
    description:
      "A multi-channel marketing campaign for a fitness application focused on user acquisition and engagement.",
    challenge:
      "FitLife had developed an excellent fitness application but was struggling to gain traction in a crowded marketplace. They needed a comprehensive marketing strategy to increase downloads and user engagement.",
    solution:
      "We created an integrated marketing campaign spanning social media, content marketing, influencer partnerships, and targeted advertising. Our approach focused on highlighting the app's unique features and building a community around the brand.",
    results: [
      "215% increase in app downloads",
      "78% reduction in customer acquisition cost",
      "63% improvement in user retention",
      "42% increase in in-app purchases",
    ],
    services: [
      "Digital Marketing Strategy",
      "Social Media Marketing",
      "Influencer Partnerships",
      "Performance Advertising",
    ],
    chartType: "funnel-chart",
    chartDescription:
      "The funnel chart illustrates the improved user acquisition journey, showing significant improvements at each stage of the marketing funnel.",
    additionalCharts: [
      {
        type: "line-chart",
        title: "User Acquisition Growth",
        description:
          "This chart shows the dramatic increase in user acquisition rates following the implementation of the marketing campaign.",
      },
      {
        type: "bar-chart",
        title: "Marketing Channel Performance",
        description:
          "The bar chart compares the performance of different marketing channels in terms of user acquisition and ROI.",
      },
    ],
  },
  "culinary-restaurant": {
    title: "Culinary",
    subtitle: "Restaurant Chain Digital Strategy",
    description: "A comprehensive digital transformation strategy for a growing restaurant chain.",
    challenge:
      "Culinary was expanding rapidly but their digital presence wasn't keeping pace. They needed a cohesive digital strategy to improve online ordering, customer engagement, and loyalty across multiple locations.",
    solution:
      "We developed an integrated digital ecosystem including a new website with online ordering capabilities, a customer loyalty program, and location-specific digital marketing campaigns. Our approach focused on creating a seamless experience across all digital touchpoints.",
    results: [
      "156% increase in online orders",
      "42% growth in customer loyalty program participation",
      "38% improvement in customer satisfaction scores",
      "27% increase in average order value",
    ],
    services: ["Digital Strategy", "Web Development", "Loyalty Program Design", "Local SEO Optimization"],
    chartType: "dashboard-chart", // Change from "dashboard" to "dashboard-chart"
    chartDescription:
      "The dashboard provides a comprehensive view of key performance indicators across the restaurant chain's digital ecosystem.",
    additionalCharts: [
      {
        type: "area-chart",
        title: "Online Order Growth",
        description:
          "This chart shows the growth in online orders across all locations following the implementation of the digital strategy.",
      },
      {
        type: "pie-chart",
        title: "Revenue Distribution by Channel",
        description:
          "The pie chart illustrates how the digital transformation shifted revenue distribution across different ordering channels.",
      },
    ],
  },
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const work = works[params.slug as keyof typeof works]

  if (!work) {
    return {
      title: "Work Not Found",
    }
  }

  return {
    title: `${work.title} - ${work.subtitle}`,
    description: work.description,
  }
}

export default function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  const work = works[slug as keyof typeof works]

  if (!work) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-12">
        <Link href="/works" className="inline-flex items-center text-muted-foreground hover:text-foreground gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to all works
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{work.title}</h1>
            <h2 className="text-2xl text-orange-500 mt-2">{work.subtitle}</h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl">{work.description}</p>
        </div>

        <div className="relative h-[400px] w-full">
          <Image src={`/charts/${work.chartType}.png`} alt={work.title} fill className="object-contain rounded-lg" />
        </div>
        <p className="text-center text-muted-foreground">{work.chartDescription}</p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">The Challenge</h2>
            <p className="text-muted-foreground">{work.challenge}</p>

            <h2 className="text-2xl font-bold">Our Solution</h2>
            <p className="text-muted-foreground">{work.solution}</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Results</h2>
            <ul className="space-y-2">
              {work.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold">Services Provided</h2>
            <ul className="space-y-2">
              {work.services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Additional Insights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {work.additionalCharts.map((chart, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <div className="relative h-[200px] w-full">
                  <Image src={`/charts/${chart.type}.png`} alt={chart.title} fill className="object-contain" />
                </div>
                <h3 className="font-bold text-lg">{chart.title}</h3>
                <p className="text-muted-foreground">{chart.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-500 text-white p-8 md:p-12 rounded-lg text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to achieve similar results?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Contact us today to learn how we can help your business succeed in the digital landscape.
          </p>
          <Button asChild variant="outline" className="bg-white text-orange-500 hover:bg-orange-50">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
