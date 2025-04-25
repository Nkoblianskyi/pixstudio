import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function LatestNewsSection() {
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
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest News</h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest insights and trends in the digital marketing world.
            </p>
          </div>
          <Link
            href="/news"
            className="text-orange-500 font-medium inline-flex items-center gap-2 hover:text-orange-600"
          >
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
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
                <h3 className="text-xl font-bold">{article.title}</h3>
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
    </section>
  )
}
