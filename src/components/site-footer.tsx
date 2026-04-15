import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-white/5 bg-charcoal text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 md:grid-cols-[1.45fr_0.8fr_0.95fr] md:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="inline-flex rounded-[1.25rem] bg-white px-4 py-3">
            <Image
              src="/brm-logo.png"
              alt={`${siteContent.companyName} logo`}
              width={220}
              height={120}
              className="h-auto w-[150px] object-contain md:w-[180px]"
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">{siteContent.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage/80">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            {siteContent.navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage/80">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            <li>{siteContent.contact.email}</li>
            <li>{siteContent.contact.phone}</li>
            <li>{siteContent.contact.bookingHours}</li>
            <li>
              <a
                href={siteContent.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/book"
              className="inline-flex items-center rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold tracking-[0.08em] text-ink hover:bg-sand"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
