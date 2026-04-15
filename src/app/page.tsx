import { PrimaryCTA } from "@/components/primary-cta";
import { ProofPointGrid } from "@/components/proof-point-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="section-frame pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="panel grid gap-10 overflow-hidden px-8 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-14">
          <div>
            <p className="eyebrow">Respiratory consulting, staffing, and credentialing support</p>
            <h1 className="title-balance mt-5 max-w-3xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
              Respiratory expertise, staffing support, and credentialing guidance for healthcare
              professionals.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/74">
              BRM Healthcare Solutions helps clinicians and healthcare organizations start the right
              conversation around respiratory consulting, credentialing, and available staffing
              support without overcomplicating the first step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA>Schedule a Call</PrimaryCTA>
              <PrimaryCTA href="/services" variant="ghost">
                View Services
              </PrimaryCTA>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-[2rem] bg-mist p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/80">
                One scheduling path for every inquiry
              </p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-ink/78">
                <p>
                  Book a 30-minute Google Meet to discuss respiratory consulting, credentialing
                  support, or agency staffing availability.
                </p>
                <p>
                  Intake is handled through Calendly with a visitor-type question so clinicians and
                  healthcare organizations can use the same clean booking experience.
                </p>
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
          title="Built for the people delivering care and the teams that support them."
          description="Version one keeps the strongest emphasis on consulting and credentialing while still listing staffing as an available service line."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-frame">
        <SectionHeading
          eyebrow="Who We Help"
          title="Two entry points, one trusted respiratory-focused partner."
          description="The site stays direct for clinicians while clearly serving facilities, clinics, and hospital leaders."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {siteContent.audiencePaths.map((path) => (
            <article key={path.title} className="panel p-8">
              <h3 className="font-display text-3xl text-ink">{path.title}</h3>
              <p className="mt-4 text-base leading-8 text-ink/76">{path.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel min-h-[320px] bg-gradient-to-br from-sage/30 via-white to-sand/20 p-8">
            <p className="eyebrow">Founder Preview</p>
            <div className="mt-8 flex h-[220px] items-center justify-center rounded-[1.75rem] border border-dashed border-sea/20 bg-white/50 text-sm text-ink/55">
              Headshot Placeholder
            </div>
          </div>

          <div className="panel p-8 md:p-10">
            <p className="eyebrow">About the founder</p>
            <h2 className="mt-4 font-display text-4xl text-ink">{siteContent.founder.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-sea/80">
              {siteContent.founder.title}
            </p>
            <p className="mt-6 text-base leading-8 text-ink/76">{siteContent.founder.summary}</p>
            <PrimaryCTA href="/about" variant="ghost" className="mt-8">
              Read the About Me page
            </PrimaryCTA>
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <div className="panel bg-ink px-8 py-10 text-white md:px-12 md:py-14">
          <p className="eyebrow text-sage">Book a conversation</p>
          <h2 className="title-balance mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            Need respiratory consulting, credentialing support, or a staffing conversation?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            Schedule a 30-minute Google Meet, Monday through Friday from 9:00 AM to 5:00 PM.
          </p>
          <PrimaryCTA className="mt-8 bg-white text-ink shadow-none hover:bg-sage">
            Schedule a Call
          </PrimaryCTA>
        </div>
      </section>
    </>
  );
}
