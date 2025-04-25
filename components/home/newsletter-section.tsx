import NewsletterForm from "@/components/newsletter-form"

export default function NewsletterSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest news, insights, and trends in the digital marketing world.
          </p>
          <div className="flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  )
}
