import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Family & Friend Respiratory Consultation",
  description:
    "Private respiratory-care consultation for families and individuals who need guidance for a loved one's oxygen, tracheostomy, discharge, equipment, or care-plan questions.",
};

const useCases = [
  "A loved one is being discharged with oxygen, respiratory equipment, or a new care routine.",
  "You need help understanding respiratory terminology, orders, or next questions to ask the care team.",
  "Your family wants a practical second conversation before making a care decision.",
  "You need help preparing for a facility meeting, home-care transition, or follow-up appointment.",
];

const boundaries = [
  "BRM does not replace emergency care or the treating clinician's medical direction.",
  "The consultation helps families organize questions, understand respiratory-care concepts, and prepare for the next clinical conversation.",
  "If symptoms are urgent or changing quickly, call 911 or contact the treating care team immediately.",
];

export default function FamilyConsultationPage() {
  return (
    <div className="section-frame">
      <section className="grid gap-px border border-bone bg-bone lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-charcoal p-8 text-white md:p-12">
          <p className="eyebrow">Private Care Guidance</p>
          <h1 className="title-balance mt-5 font-display text-5xl font-black uppercase leading-none md:text-6xl">
            Family & friend respiratory consultation.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
            A focused consultation for people who need respiratory-care guidance for a loved one and want a clearer way to prepare for the next care conversation.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryCTA href="/book?service=family-consultation">Start $50 Consultation Request</PrimaryCTA>
            <PrimaryCTA href={`mailto:${siteContent.contact.email}?subject=Family%20and%20Friend%20Consultation`} variant="ghost">
              Email BRM
            </PrimaryCTA>
          </div>
        </div>

        <div className="bg-white p-8 text-charcoal md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-sea">Consultation Fee</p>
          <p className="mt-5 font-display text-6xl font-black leading-none">$50</p>
          <p className="mt-4 text-sm leading-7 text-black/72">
            For one private patient or family-care question reviewed by BRM. Payment and automated text notification can be connected through a payment provider.
          </p>
          <div className="mt-7 border-l-4 border-sea pl-5 text-sm leading-7 text-black/72">
            After the request is submitted, BRM will follow up by phone or email using the contact information provided.
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-px border border-bone bg-bone lg:grid-cols-2">
        <div className="bg-linen p-8 text-white md:p-10">
          <SectionHeading eyebrow="Use This For" title="When a loved one's care plan feels unclear." />
          <ul className="mt-8 space-y-4 text-sm leading-7 text-white">
            {useCases.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-sea" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-charcoal p-8 text-white md:p-10">
          <p className="eyebrow">Important Boundaries</p>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight">
            Guidance, not emergency care.
          </h2>
          <ul className="mt-8 space-y-4 text-sm leading-7 text-white/78">
            {boundaries.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-sea" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/book?service=family-consultation"
            className="mt-9 inline-flex border border-sea bg-sea px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-ember"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
