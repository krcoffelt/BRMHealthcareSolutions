import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { PrimaryCTA } from "@/components/primary-cta";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <div className="glass-shell mx-auto max-w-[1180px] rounded-[2rem]">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-7">
          <Link
            href="/"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
          >
            <Image
              src="/brm-logo.png"
              alt={`${siteContent.companyName} logo`}
              width={190}
              height={104}
              className="h-auto w-[126px] object-contain md:w-[162px]"
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
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

          <PrimaryCTA className="hidden sm:inline-flex">Request a Consultation</PrimaryCTA>
        </div>

        <nav
          aria-label="Mobile primary"
          className="flex gap-2 overflow-x-auto border-t border-bone/40 px-4 py-3 lg:hidden"
        >
          {siteContent.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-bone/55 bg-white/70 px-4 py-2 text-sm font-medium text-steel hover:border-sea hover:text-sea focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
