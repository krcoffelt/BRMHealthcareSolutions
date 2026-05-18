import type { Metadata } from "next";
import "@/app/globals.css";
import { AudienceGate } from "@/components/audience-gate";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://brmhealthcaresolutions.com"),
  title: {
    default: `${siteContent.companyName} | Respiratory Consulting, Staffing, BLS & ACLS`,
    template: `%s | ${siteContent.companyName}`,
  },
  description: siteContent.description,
  keywords: [
    "respiratory consulting",
    "respiratory therapist staffing",
    "critical care consulting",
    "BLS classes",
    "ACLS classes",
    "respiratory education",
    "Joint Commission readiness",
    "CMS billing compliance",
    "private respiratory consultation",
    "family healthcare consultation",
  ],
  openGraph: {
    title: `${siteContent.companyName} | Respiratory Consulting and Education`,
    description: siteContent.description,
    url: "https://brmhealthcaresolutions.com",
    siteName: siteContent.companyName,
    images: [
      {
        url: "/brm-healthcare-logo-wide.png",
        width: 1000,
        height: 200,
        alt: siteContent.companyName,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteContent.companyName,
    description: siteContent.description,
    url: "https://brmhealthcaresolutions.com",
    telephone: siteContent.contact.phone,
    email: siteContent.contact.email,
    sameAs: [siteContent.contact.linkedin],
    areaServed: "United States",
    serviceType: [
      "Respiratory consulting",
      "Agency staffing",
      "BLS education",
      "ACLS education",
      "Private respiratory consultation",
      "Compliance and accreditation readiness",
    ],
  };

  return (
    <html lang="en">
      <body>
        <div className="page-shell min-h-screen">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <SiteHeader />
          <AudienceGate />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
