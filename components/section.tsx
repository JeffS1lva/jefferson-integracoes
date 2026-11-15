import { cn } from "@/lib/utils";

export function Section({
  rail,
  title,
  sub,
  children,
  className,
}: {
  rail: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("reveal mt-16", className)}>
      <p className="rail mb-[18px]">{rail}</p>
      <h2 className="font-display text-[1.45rem] font-semibold tracking-[-0.012em] text-balance">
        {title}
      </h2>
      {sub ? (
        <p className="mt-2 max-w-[58ch] text-muted-foreground">{sub}</p>
      ) : null}
      <div className="mt-7">{children}</div>
    </section>
  );
}
