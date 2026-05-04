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
    "inline-flex items-center justify-center border px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const variants = {
    solid:
      "border-sea bg-sea text-white shadow-float hover:bg-ember focus-visible:outline-sea",
    ghost:
      "border-white/70 bg-transparent text-white hover:border-white hover:bg-white hover:text-charcoal focus-visible:outline-sea",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>
      <span>{children}</span>
    </Link>
  );
}
