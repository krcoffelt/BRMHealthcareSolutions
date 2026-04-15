import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-display text-3xl text-ink">{siteContent.companyName}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink/72">{siteContent.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/70">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-ink/72">
            {siteContent.navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sea">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/70">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-ink/72">
            <li>{siteContent.contact.email}</li>
            <li>{siteContent.contact.phone}</li>
            <li>{siteContent.contact.bookingHours}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
