import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission, vision, and principles at PixStudioCo.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            DEDICATED TO HELPING YOUR BRAND THRIVE IN THE EVER-EVOLVING DIGITAL LANDSCAPE
          </h1>
          <p className="text-xl text-muted-foreground">
            We're committed to delivering exceptional results for our clients through our expertise in creativity,
            innovation, and strategic thinking.
          </p>
          <div className="pt-6">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-2xl font-bold text-orange-500">1200+</h3>
              <p className="text-muted-foreground">Projects completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-2xl font-bold text-orange-500">400+</h3>
              <p className="text-muted-foreground">Satisfied clients</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-2xl font-bold text-orange-500">150+</h3>
              <p className="text-muted-foreground">Awards won</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/team-collaboration.png"
              alt="Our team collaboration"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2015, PixStudioCo began as a small team of passionate digital marketers with a vision to
              transform how businesses connect with their audiences online. What started as a boutique agency has grown
              into a full-service digital marketing powerhouse with a global client base.
            </p>
            <p className="text-lg text-muted-foreground">
              Our journey has been defined by continuous innovation, adaptability, and a relentless focus on delivering
              measurable results for our clients. Through economic shifts and technological revolutions, we've stayed
              ahead of the curve, constantly evolving our strategies and approaches.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're proud to be recognized as industry leaders, helping businesses of all sizes navigate the
              complex digital landscape and achieve their marketing objectives.
            </p>
          </div>
        </div>

        <div className="bg-orange-500 text-white p-8 md:p-12 rounded-lg">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">OUR MISSION</h2>
            <p className="text-lg">
              We're committed to delivering exceptional results for our clients through our expertise in creativity,
              innovation, and strategic thinking. Our goal is to help businesses of all sizes thrive in the digital
              landscape by providing tailored solutions that drive growth, enhance brand visibility, and create
              meaningful connections with their target audiences.
            </p>
            <p className="text-lg">
              We believe in transparent partnerships, data-driven strategies, and continuous optimization to ensure our
              clients stay ahead in the ever-evolving digital world.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">OUR PRINCIPLES</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and methodologies to provide cutting-edge solutions for our
                clients. We embrace change and view challenges as opportunities for innovation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from client communication to project delivery. Our
                commitment to quality is unwavering, and we continuously refine our processes to deliver the best
                possible results.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards of honesty and transparency in all our business dealings. We believe
                in building trust through ethical practices and open communication.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership. We work closely with our clients, understanding
                their unique needs and goals to create customized strategies that deliver results.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Data-Driven</h3>
              <p className="text-muted-foreground">
                We base our strategies and decisions on solid data and analytics. This approach allows us to measure
                performance accurately, optimize campaigns effectively, and demonstrate clear ROI for our clients.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Client Success</h3>
              <p className="text-muted-foreground">
                Our clients' success is our success. We're dedicated to understanding their business objectives and
                delivering solutions that help them achieve and exceed their goals.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">OUR APPROACH</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Strategic Planning</h3>
              <p className="text-lg text-muted-foreground">
                We begin every client relationship with a deep dive into your business, industry, competitors, and
                target audience. This comprehensive analysis forms the foundation of our strategic approach, ensuring
                that every tactic we implement is aligned with your specific goals and challenges.
              </p>
              <p className="text-lg text-muted-foreground">
                Our strategic planning process combines market research, competitive analysis, audience insights, and
                performance data to create a roadmap for success that evolves with your business and the digital
                landscape.
              </p>
            </div>
            <div>
              <Image
                src="/strategic-planning.png"
                alt="Strategic planning session"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
          <Button asChild size="lg">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
