import { CalendlyEmbed } from "@/components/calendly-embed";
import { siteContent } from "@/content/site";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function BookPage() {
  return (
    <div className="section-frame">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="eyebrow">Book a consultation</p>
          <h1 className="title-balance mt-4 font-display text-5xl leading-tight text-ink md:text-6xl">
            {siteContent.contact.bookingTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/76">
            Use the scheduler below to book a conversation about agency staffing, credentialing
            support, or respiratory consulting. Meetings are held over Google Meet during{" "}
            {siteContent.contact.bookingHours}.
          </p>
        </div>

        <CalendlyEmbed url={calendlyUrl} />

        <div className="mt-8 panel grid gap-6 p-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
              Booking guidance
            </p>
            <p className="mt-4 text-sm leading-7 text-ink/75">
              Configure Calendly with one 30-minute event type, Google Meet enabled, and intake
              questions for visitor type, facility or organization name, and optional phone number.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
              Fallback contact
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/75">
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
