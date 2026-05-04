type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="title-balance mt-4 max-w-4xl font-display text-[2.35rem] font-bold uppercase leading-[1.02] text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[1.02rem] leading-8 text-steel md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
