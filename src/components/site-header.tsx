import Link from "next/link";
import { siteContent } from "@/content/site";
import { PrimaryCTA } from "@/components/primary-cta";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-linen/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="max-w-xs">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sea/75">BRM</p>
          <p className="mt-1 font-display text-2xl leading-none text-ink">{siteContent.companyName}</p>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {siteContent.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/75 hover:text-sea focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
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
