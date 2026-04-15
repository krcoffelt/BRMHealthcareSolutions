import { PrimaryCTA } from "@/components/primary-cta";
import type { Service } from "@/content/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="panel flex h-full flex-col p-8">
      <p className="eyebrow">Service</p>
      <h3 className="mt-4 font-display text-3xl text-ink">{service.title}</h3>
      <p className="mt-4 text-base leading-8 text-ink/76">{service.description}</p>

      <div className="mt-6 rounded-3xl bg-mist px-5 py-5">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/80">Who it&apos;s for</p>
        <p className="mt-3 text-sm leading-7 text-ink/76">{service.whoItsFor}</p>
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/80">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sea" aria-hidden="true" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <PrimaryCTA className="mt-8 self-start">Schedule a Call</PrimaryCTA>
    </article>
  );
}
