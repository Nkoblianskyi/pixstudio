import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import StatsSection from "@/components/home/stats-section"
import ServicesSection from "@/components/home/services-section"
import FeaturedWorksSection from "@/components/home/featured-works-section"
import NewsletterSection from "@/components/home/newsletter-section"
import LatestNewsSection from "@/components/home/latest-news-section"
import CTASection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Digital Marketing Agency",
  description: "We help brands thrive in the ever-evolving digital landscape with innovative marketing solutions.",
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedWorksSection />
      <LatestNewsSection />
      <NewsletterSection />
      <CTASection />
    </div>
  )
}
