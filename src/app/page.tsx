import { PrimaryCTA } from "@/components/primary-cta";
import { ProofPointGrid } from "@/components/proof-point-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="section-frame pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="hero-grid panel grid gap-10 overflow-hidden px-8 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-12 md:py-14">
          <div>
            <p className="eyebrow">BRM Healthcare Solutions</p>
            <h1 className="title-balance mt-5 max-w-3xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
              Respiratory consulting and credentialing support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              Cost-effective, results-driven respiratory leadership for each facility&apos;s daily and annual operational needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA>Schedule a Call</PrimaryCTA>
              <PrimaryCTA href="/services" variant="ghost">
                View Services
              </PrimaryCTA>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-sea/12 bg-white/80 px-5 py-4">
                <p className="text-3xl font-semibold text-sea">19</p>
                <p className="mt-2 text-sm leading-6 text-steel">Years in critical care leadership and respiratory practice.</p>
              </div>
              <div className="rounded-[1.5rem] border border-sea/12 bg-white/80 px-5 py-4">
                <p className="text-3xl font-semibold text-sea">$112M+</p>
                <p className="mt-2 text-sm leading-6 text-steel">Proven P&amp;L improvement through financial, throughput, readmission, and billing analysis.</p>
              </div>
              <div className="rounded-[1.5rem] border border-sea/12 bg-white/80 px-5 py-4">
                <p className="text-3xl font-semibold text-sea">&gt;95%</p>
                <p className="mt-2 text-sm leading-6 text-steel">Retention performance while improving quality outcomes.</p>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <div className="dark-band w-full rounded-[2rem] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
                Advisory snapshot
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight">
                Built for healthcare leaders.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/78">
                <p>
                  Book a 30-minute Google Meet to discuss consulting, credentialing, or staffing availability.
                </p>
              </div>
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-white/75">
                <p>KPIs, orientation, leadership development, and staff education.</p>
                <p>Five Joint Commission surveys in a row with zero deficiencies noted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame py-10 md:py-12">
        <ProofPointGrid items={siteContent.proofPoints} />
      </section>

      <section className="section-frame">
        <SectionHeading
          eyebrow="Services"
          title="Focused respiratory and credentialing services."
          description="Consulting and credentialing first, with staffing still listed."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-frame pt-4">
        <SectionHeading
          eyebrow="Who We Help"
          title="For healthcare organizations and clinicians."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {siteContent.audiencePaths.map((path) => (
            <article key={path.title} className="panel p-8">
              <h3 className="font-display text-3xl text-ink">{path.title}</h3>
              <p className="mt-4 text-base leading-8 text-steel">{path.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel min-h-[320px] p-8">
            <p className="eyebrow">Leadership Profile</p>
            <div className="mt-8 rounded-[1.75rem] border border-sea/10 bg-mist p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/80">Executive profile</p>
              <p className="mt-5 text-4xl font-semibold text-ink">MBHA, RRT</p>
              <div className="mt-6 space-y-3 text-sm leading-7 text-steel">
                <p>Multi-site respiratory and pulmonary leadership.</p>
                <p>Operations, compliance, and service line support.</p>
              </div>
            </div>
          </div>

          <div className="panel p-8 md:p-10">
            <p className="eyebrow">About the founder</p>
            <h2 className="mt-4 font-display text-4xl text-ink">{siteContent.founder.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-sea/80">
              {siteContent.founder.title}
            </p>
            <p className="mt-6 text-base leading-8 text-steel">{siteContent.founder.summary}</p>
            <PrimaryCTA href="/about" variant="ghost" className="mt-8">
              Read the About Me page
            </PrimaryCTA>
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <div className="dark-band panel px-8 py-10 text-white md:px-12 md:py-14">
          <p className="eyebrow text-sage">Book a conversation</p>
          <h2 className="title-balance mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            Need consulting or credentialing support?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            Schedule a 30-minute Google Meet, Monday through Friday from 9:00 AM to 5:00 PM.
          </p>
          <PrimaryCTA className="mt-8 bg-white text-ink shadow-none hover:bg-sand">
            Schedule a Call
          </PrimaryCTA>
        </div>
      </section>
    </>
  );
}
