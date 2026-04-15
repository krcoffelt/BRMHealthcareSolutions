import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { PrimaryCTA } from "@/components/primary-cta";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-sea/10 bg-linen/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
        >
          <Image
            src="/brm-logo.png"
            alt={`${siteContent.companyName} logo`}
            width={190}
            height={104}
            className="h-auto w-[150px] object-contain md:w-[190px]"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {siteContent.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-steel hover:text-sea focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <PrimaryCTA className="hidden md:inline-flex">Schedule a Call</PrimaryCTA>
      </div>
    </header>
  );
}
