import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteContent } from "@/content/site";

export default function ServicesPage() {
  return (
    <div className="section-frame">
      <SectionHeading
        eyebrow="Services"
        title="Practical support across staffing, credentialing, and respiratory consulting."
        description="The service mix lists staffing, but the clearest public detail in version one stays centered on consulting, credentialing, and respiratory operational support."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {siteContent.services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <section className="mt-12 panel p-8 md:p-10">
        <p className="eyebrow">For healthcare organizations</p>
        <h2 className="mt-4 font-display text-4xl text-ink">
          Facilities can book support for staffing, consulting, and credentialing.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-ink/76">
          BRM Healthcare Solutions is not limited to individual clinician conversations. Clinics,
          hospitals, and healthcare leaders can use the same scheduling path to discuss respiratory
          consulting, workforce needs, and critical care credentialing support, including whether
          staffing support is a fit.
        </p>
        <PrimaryCTA className="mt-8">Schedule a Call</PrimaryCTA>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Fee Schedule"
          title={siteContent.feeSchedule.bedRangeLabel}
          description="This pricing section is based on the uploaded BRM Healthcare Solutions fee schedule and separates individual professional services from facility-level programs."
        />

        <div className="mt-8 panel p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
            Individual professional services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink/72">{siteContent.feeSchedule.note}</p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm text-ink/80">
              <thead>
                <tr className="text-xs uppercase tracking-[0.16em] text-sea/70">
                  <th className="pb-2 pr-4">Service / Class</th>
                  <th className="pb-2 pr-4">Individual Price</th>
                  <th className="pb-2">Annual Retainer Plan</th>
                </tr>
              </thead>
              <tbody>
                {siteContent.feeSchedule.individualServices.map((item) => (
                  <tr key={item.service} className="rounded-3xl bg-white align-top">
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
              <p className="mt-3 text-sm leading-7 text-ink/72">
                Estimated hours and annual retainer terms for program support, reviews, leadership,
                and operational initiatives.
              </p>
            </div>
            <div className="rounded-full bg-mist px-5 py-3 text-sm font-semibold text-ink">
              Annual Professional Services Fee: {siteContent.feeSchedule.annualProfessionalServicesFee}
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm text-ink/80">
              <thead>
                <tr className="text-xs uppercase tracking-[0.16em] text-sea/70">
                  <th className="pb-2 pr-4">Service / Program</th>
                  <th className="pb-2 pr-4">Estimated Hours</th>
                  <th className="pb-2">Annual Retainer Plan</th>
                </tr>
              </thead>
              <tbody>
                {siteContent.feeSchedule.facilityPrograms.map((item) => (
                  <tr key={item.service} className="rounded-3xl bg-white align-top">
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
