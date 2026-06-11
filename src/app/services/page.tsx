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
            Respiratory and nursing operations without unnecessary overhead.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/76">
            BRM helps facilities strengthen workflows, billing performance, readiness, staffing support, and education without adding unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {siteContent.services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </section>

      <section className="mt-12">
        <div className="relative overflow-hidden border border-bone bg-sea p-8 text-white md:p-10">
          <div className="grid-plane absolute inset-0 opacity-20" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white">Next Step</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight">
              Build the right scope after one conversation.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/85">
              BRM reviews the facility need first, then recommends the right mix of operations, staffing, education, and readiness support.
            </p>
            <PrimaryCTA className="mt-8 border-white bg-white !text-charcoal hover:bg-charcoal hover:!text-white">
              Schedule Meeting
            </PrimaryCTA>
          </div>
        </div>
      </section>
    </div>
  );
}
