import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteContent } from "@/content/site";

const serviceOfferings = [
  {
    title: "Direct Professional Support",
    description:
      "Short-term support for specific facility needs, education requests, staffing discussions, and clinical consultation.",
    items: [
      "Agency staffing conversations for ICU, ER, PICU, and NICU settings",
      "BLS, ACLS, CEU, equipment, tracheostomy, and oxygen therapy education",
      "General consultation and private patient or family-care guidance",
    ],
  },
  {
    title: "Facility Programs",
    description:
      "Broader operational programs scoped after discovery for facilities that need sustained respiratory leadership support.",
    items: [
      "Guideline review, supply review, survey readiness, and compliance support",
      "Interim leadership, leadership development, and staff competency programs",
      "Charge analysis, throughput strategy, readmission reduction, and service-line planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="section-frame">
      <section className="hero-grid panel grid gap-8 px-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:py-12">
        <SectionHeading
          eyebrow="Services"
          title="Everything your respiratory department needs under one roof."
          description="Consulting, staffing, accreditation readiness, education, and leadership development built around measurable facility performance."
        />
        <div className="dark-band rounded-[1.8rem] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Performance Focus</p>
          <p className="mt-5 text-3xl font-display leading-tight">
            Elite respiratory leadership without full-time overhead.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/76">
            BRM helps facilities strengthen workflows, billing performance, readiness, staffing support, and respiratory leadership without adding unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {siteContent.services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="panel p-8 md:p-10">
          <p className="eyebrow">For healthcare organizations</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink">
            One conversation for your operational, staffing, and compliance needs.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-steel">
            Whether you need interim leadership, staff education, billing compliance, or a department overhaul, BRM can build the right level of support for your facility.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-8 text-steel">
            BRM also brings proven P&amp;L improvement through financial analysis, throughput efficiency, readmission reduction, and billing analysis.
          </p>
          <PrimaryCTA className="mt-8">Schedule Meeting</PrimaryCTA>
        </div>

        <div className="data-panel rounded-[2rem] border border-bone/50 p-8">
          <p className="eyebrow">Advisory Scope</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-steel">
            <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-sea" aria-hidden="true" /><span>Financial and billing analysis</span></li>
            <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-sea" aria-hidden="true" /><span>Throughput and readmission reduction strategies</span></li>
            <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-sea" aria-hidden="true" /><span>Compliance and survey readiness support</span></li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Services Offered"
          title="Two ways BRM can support your team."
          description="Specific scope and investment are reviewed directly after an in-person or discovery meeting."
        />

        <div className="mt-8 grid gap-px border border-bone bg-bone lg:grid-cols-2">
          {serviceOfferings.map((offering) => (
            <article key={offering.title} className="bg-linen p-8 text-white md:p-10">
              <h3 className="font-display text-3xl font-black uppercase leading-tight">{offering.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/76">{offering.description}</p>
              <ul className="mt-7 space-y-4 text-sm leading-7 text-white">
                {offering.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-sea" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
