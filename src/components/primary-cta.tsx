import Link from "next/link";

type PrimaryCTAProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function PrimaryCTA({
  href = "/book",
  children,
  variant = "solid",
  className = "",
}: PrimaryCTAProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const variants = {
    solid: "bg-sea text-white shadow-lg shadow-sea/20 hover:bg-ink focus-visible:outline-sea",
    ghost:
      "border border-ink/15 bg-white/80 text-ink hover:border-sea hover:text-sea focus-visible:outline-ink",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
