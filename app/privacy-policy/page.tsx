import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 25, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            At PixStudioCo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our services. Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>

          <h3>Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, email address, telephone number, and address, that
            you voluntarily give to us when you register with the website or when you choose to participate in various
            activities related to the website, such as online chat and message boards. You are under no obligation to
            provide us with personal information of any kind, however your refusal to do so may prevent you from using
            certain features of the website.
          </p>

          <h3>Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the website, such as your IP address, your
            browser type, your operating system, your access times, and the pages you have viewed directly before and
            after accessing the website.
          </p>

          <h3>Financial Data</h3>
          <p>
            Financial information, such as data related to your payment method (e.g., valid credit card number, card
            brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
            information about our services from the website.
          </p>

          <h2>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized
            experience. Specifically, we may use information collected about you via the website to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Process your transactions.</li>
            <li>Send you email newsletters, if you have opted in to receive them.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
            <li>Increase the efficiency and operation of the website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
            <li>Notify you of updates to the website.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>

          <h3>By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate
            or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we
            may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>

          <h3>Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including
            payment processing, data analysis, email delivery, hosting services, customer service, and marketing
            assistance.
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            PixStudioCo
            <br />
            Na Příkopě 15, 110 00 Praha 1, Czech Republic
            <br />
            info@pixstudioco.com
            <br />
          </p>
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
