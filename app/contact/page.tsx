import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for any inquiries or to discuss your project.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Reach out to discuss your project, ask questions, or learn more about our
            services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg">Visit Us</h3>
              <p className="text-muted-foreground">
                Na Příkopě 15
                <br />
                110 00 Praha 1<br />
                Czech Republic
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg">Email Us</h3>
              <p className="text-muted-foreground">
                General Inquiries:
                <br />
                info@pixstudioco.com
                <br />
                <br />
                Support:
                <br />
                support@pixstudioco.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg">Call Us</h3>
              <p className="text-muted-foreground">
                Main Office:
                <br />
                +420 123 456 789
                <br />
                <br />
                Customer Support:
                <br />
                +420 987 654 321
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg">Business Hours</h3>
              <div className="text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg">Service Areas</h3>
              <p className="text-muted-foreground">
                We provide digital marketing services globally, with a focus on Europe, North America, and Asia. Our
                team speaks English, Czech, German, and Spanish to better serve our international clients.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
