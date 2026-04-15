import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteContent } from "@/content/site";

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
          <PrimaryCTA className="mt-8">Request a Consultation</PrimaryCTA>
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
          eyebrow="Fee Schedule"
          title={siteContent.feeSchedule.bedRangeLabel}
          description="Current professional services and program fees."
        />

        <div className="mt-8 panel p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
            Individual professional services
          </p>
          <p className="mt-3 text-sm leading-7 text-steel">{siteContent.feeSchedule.note}</p>

          <div className="table-shell mt-6 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th className="pb-2 pr-4">Service / Class</th>
                  <th className="pb-2 pr-4">Individual Price</th>
                  <th className="pb-2">Annual Retainer Plan</th>
                </tr>
              </thead>
              <tbody>
                {siteContent.feeSchedule.individualServices.map((item) => (
                  <tr key={item.service}>
                    <td className="rounded-l-3xl px-5 py-4">{item.service}</td>
                    <td className="px-5 py-4 whitespace-nowrap">{item.price}</td>
                    <td className="rounded-r-3xl px-5 py-4 whitespace-nowrap">{item.retainer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 panel p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
                Facility professional services and programs
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                Estimated hours and annual retainer terms.
              </p>
            </div>
            <div className="rounded-full border border-bone/60 bg-mist px-5 py-3 text-sm font-semibold text-ink">
              Annual Professional Services Fee: {siteContent.feeSchedule.annualProfessionalServicesFee}
            </div>
          </div>

          <div className="table-shell mt-6 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th className="pb-2 pr-4">Service / Program</th>
                  <th className="pb-2 pr-4">Estimated Hours</th>
                  <th className="pb-2">Annual Retainer Plan</th>
                </tr>
              </thead>
              <tbody>
                {siteContent.feeSchedule.facilityPrograms.map((item) => (
                  <tr key={item.service}>
                    <td className="rounded-l-3xl px-5 py-4">{item.service}</td>
                    <td className="px-5 py-4 whitespace-nowrap">{item.estimatedHours}</td>
                    <td className="rounded-r-3xl px-5 py-4 whitespace-nowrap">{item.retainer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
