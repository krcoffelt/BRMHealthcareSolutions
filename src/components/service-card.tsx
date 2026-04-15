import { PrimaryCTA } from "@/components/primary-cta";
import type { Service } from "@/content/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="panel flex h-full flex-col overflow-hidden p-8">
      <div className="-mx-8 -mt-8 h-1.5 bg-gradient-to-r from-sea via-ember to-transparent" />
      <p className="eyebrow mt-7">Service Line</p>
      <h3 className="mt-4 font-display text-[2rem] leading-tight text-ink">{service.title}</h3>
      <p className="mt-4 text-base leading-8 text-steel">{service.description}</p>

      <div className="soft-card mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/80">Who it&apos;s for</p>
        <p className="mt-3 text-sm leading-7 text-steel">{service.whoItsFor}</p>
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-steel">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sea shadow-[0_0_0_6px_rgba(166,29,50,0.08)]" aria-hidden="true" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <PrimaryCTA className="mt-8 self-start">Request a Consultation</PrimaryCTA>
    </article>
  );
}
