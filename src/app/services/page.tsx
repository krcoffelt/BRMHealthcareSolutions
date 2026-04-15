import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteContent } from "@/content/site";

export default function ServicesPage() {
  return (
    <div className="section-frame">
      <section className="panel hero-grid px-8 py-10 md:px-12 md:py-14">
        <SectionHeading
          eyebrow="Services"
          title="Respiratory consulting, credentialing, and staffing support."
          description="Clear services, simple presentation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mt-12 panel p-8 md:p-10">
        <p className="eyebrow">For healthcare organizations</p>
        <h2 className="mt-4 font-display text-4xl text-ink">
          Facilities can book support for staffing, consulting, and credentialing.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-steel">
          Clinics, hospitals, and healthcare leaders can use the same scheduling path to discuss
          consulting, credentialing, and staffing fit.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-8 text-steel">
          BRM also brings proven P&amp;L improvement through financial analysis, throughput efficiency,
          readmission reduction, and billing analysis.
        </p>
        <PrimaryCTA className="mt-8">Schedule a Call</PrimaryCTA>
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
            <div className="rounded-full border border-sea/10 bg-mist px-5 py-3 text-sm font-semibold text-ink">
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
