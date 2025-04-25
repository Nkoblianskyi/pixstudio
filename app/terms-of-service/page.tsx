import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Learn about the terms and conditions governing the use of our website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: April 25, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the PixStudioCo website and services.
            Please read these Terms carefully, and contact us if you have any questions. By accessing or using our
            services, you agree to be bound by these Terms and our Privacy Policy.
          </p>

          <h2>1. Using our Services</h2>
          <p>
            You must follow any policies made available to you within the Services. You may use our Services only as
            permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms
            or policies or if we are investigating suspected misconduct.
          </p>

          <h2>2. Your Account</h2>
          <p>
            You may need an account to use some of our Services. You are responsible for the activity that happens on or
            through your account. If you learn of any unauthorized use of your account, please contact us immediately.
          </p>

          <h2>3. Privacy and Copyright Protection</h2>
          <p>
            Our Privacy Policy explains how we treat your personal data and protect your privacy when you use our
            Services. By using our Services, you agree that we can use such data in accordance with our Privacy Policy.
          </p>

          <h2>4. Your Content in our Services</h2>
          <p>
            Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of
            any intellectual property rights that you hold in that content. When you upload, submit, store, send or
            receive content to or through our Services, you give us a worldwide license to use, host, store, reproduce,
            modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute
            such content.
          </p>

          <h2>5. About Software in our Services</h2>
          <p>
            When a Service requires or includes downloadable software, this software may update automatically on your
            device once a new version or feature is available. Some Services may let you adjust your automatic update
            settings.
          </p>

          <h2>6. Modifying and Terminating our Services</h2>
          <p>
            We are constantly changing and improving our Services. We may add or remove functionalities or features, and
            we may suspend or stop a Service altogether. You can stop using our Services at any time, although we'll be
            sorry to see you go. We may also stop providing Services to you, or add or create new limits to our Services
            at any time.
          </p>

          <h2>7. Our Warranties and Disclaimers</h2>
          <p>
            We provide our Services using a commercially reasonable level of skill and care and we hope that you will
            enjoy using them. But there are certain things that we don't promise about our Services. OTHER THAN AS
            EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER PIXSTUDIOCO NOR ITS SUPPLIERS OR DISTRIBUTORS
            MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES. FOR EXAMPLE, WE DON'T MAKE ANY COMMITMENTS ABOUT THE CONTENT
            WITHIN THE SERVICES, THE SPECIFIC FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY, AVAILABILITY, OR ABILITY
            TO MEET YOUR NEEDS. WE PROVIDE THE SERVICES "AS IS".
          </p>

          <h2>8. Liability for our Services</h2>
          <p>
            WHEN PERMITTED BY LAW, PIXSTUDIOCO, AND PIXSTUDIOCO'S SUPPLIERS AND DISTRIBUTORS, WILL NOT BE RESPONSIBLE
            FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
            PUNITIVE DAMAGES. TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF PIXSTUDIOCO, AND ITS SUPPLIERS AND
            DISTRIBUTORS, FOR ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE
            AMOUNT YOU PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO SUPPLYING YOU THE SERVICES AGAIN).
          </p>

          <h2>9. Business uses of our Services</h2>
          <p>
            If you are using our Services on behalf of a business, that business accepts these terms. It will hold
            harmless and indemnify PixStudioCo and its affiliates, officers, agents, and employees from any claim, suit
            or action arising from or related to the use of the Services or violation of these terms, including any
            liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys'
            fees.
          </p>

          <h2>10. About these Terms</h2>
          <p>
            We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes
            to the law or changes to our Services. You should look at the terms regularly. We'll post notice of
            modifications to these terms on this page. Changes will not apply retroactively and will become effective no
            sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or
            changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for
            a Service, you should discontinue your use of that Service.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            PixStudioCo
            <br />
            Na Příkopě 15, 110 00 Praha 1, Czech Republic
            <br />
            info@pixstudioco.com
            <br />
            +420 123 456 789
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
