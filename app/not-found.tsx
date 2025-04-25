import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-20 md:py-32 text-center">
      <h1 className="text-9xl font-bold text-orange-500">404</h1>
      <h2 className="text-3xl font-bold mt-6 mb-4">Page Not Found</h2>
      <p className="text-xl text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
