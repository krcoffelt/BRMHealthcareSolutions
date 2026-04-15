import { CalendlyEmbed } from "@/components/calendly-embed";
import { siteContent } from "@/content/site";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function BookPage() {
  return (
    <div className="section-frame">
      <div className="mx-auto max-w-5xl">
        <div className="hero-grid panel mb-10 grid gap-8 px-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:py-12">
          <div>
            <p className="eyebrow">Book a consultation</p>
            <h1 className="title-balance mt-4 font-display text-5xl leading-tight text-ink md:text-6xl">
              {siteContent.contact.bookingTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-steel">
              Let&apos;s talk about what BRM can do for your facility. Meetings are held over Google
              Meet during {siteContent.contact.bookingHours}.
            </p>
          </div>

          <div className="dark-band rounded-[1.8rem] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">What To Expect</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/78">
              <li>30-minute discovery call format</li>
              <li>Google Meet delivery</li>
              <li>Support for one-time projects or annual partnerships</li>
            </ul>
          </div>
        </div>

        <CalendlyEmbed url={calendlyUrl} />

        <div className="mt-8 panel grid gap-6 p-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
              Booking guidance
            </p>
            <p className="mt-4 text-sm leading-7 text-steel">
              Use one 30-minute event type with Google Meet and basic intake questions.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
              Fallback contact
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-steel">
              <li>{siteContent.contact.email}</li>
              <li>{siteContent.contact.phone}</li>
              <li>{siteContent.contact.bookingHours}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
