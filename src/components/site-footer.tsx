import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-bone bg-charcoal text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 md:grid-cols-[1.45fr_0.8fr_0.95fr] md:px-8">
        <div className="border border-bone bg-sand p-6">
          <p className="font-display text-lg font-black uppercase tracking-[0.16em] text-white">
            BRM Healthcare
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">{siteContent.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea">Explore</p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea">Contact</p>
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
              className="inline-flex items-center border border-sea bg-sea px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-ember"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
