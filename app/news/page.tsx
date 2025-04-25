import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Stay updated with the latest news, trends, and insights from the digital marketing world.",
}

const articles = [
  {
    id: "digital-marketing-trends-2025",
    title: "Digital Marketing Trends to Watch in 2025",
    excerpt: "Explore the emerging trends that will shape the digital marketing landscape in 2025 and beyond.",
    date: "March 15, 2025",
    category: "Industry Trends",
    image: "digital-trends-image",
  },
  {
    id: "ai-revolution-marketing",
    title: "How AI is Revolutionizing Digital Marketing",
    excerpt:
      "Discover how artificial intelligence is transforming marketing strategies and creating new opportunities for businesses.",
    date: "February 28, 2025",
    category: "Technology",
    image: "ai-marketing-image",
  },
  {
    id: "seo-best-practices-2025",
    title: "SEO Best Practices for 2025",
    excerpt: "Stay ahead of the competition with these updated SEO strategies and techniques for 2025.",
    date: "February 10, 2025",
    category: "SEO",
    image: "seo-strategies-image",
  },
  {
    id: "social-media-strategy-guide",
    title: "The Ultimate Social Media Strategy Guide",
    excerpt: "Learn how to create an effective social media strategy that drives engagement and conversions.",
    date: "January 25, 2025",
    category: "Social Media",
    image: "social-media-image",
  },
  {
    id: "content-marketing-roi",
    title: "Measuring Content Marketing ROI",
    excerpt:
      "Practical approaches to measuring and optimizing the return on investment of your content marketing efforts.",
    date: "January 12, 2025",
    category: "Content Marketing",
    image: "content-marketing-image",
  },
  {
    id: "privacy-first-marketing",
    title: "Privacy-First Marketing in a Cookieless World",
    excerpt:
      "Strategies for effective marketing in an era of increased privacy regulations and reduced tracking capabilities.",
    date: "January 5, 2025",
    category: "Privacy & Compliance",
    image: "privacy-marketing-image",
  },
]

export default function NewsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">News & Insights</h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest news, trends, and insights from the digital marketing world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full overflow-hidden">
              <div className="relative h-48">
                <Image src={`/news/${article.image}.png`} alt={article.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex-1 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="text-xl font-bold">{article.title}</h2>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  href={`/news/${article.id}`}
                  className="text-orange-500 font-medium inline-flex items-center gap-2 hover:text-orange-600"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
