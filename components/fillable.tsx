import { isTodo, type Fillable } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Renderiza um campo de lib/content.ts. Se ainda for `{ todo: "..." }`,
 * aparece como etiqueta de pendência para você não esquecer de preencher.
 */
export function Field({
  value,
  className,
}: {
  value: Fillable;
  className?: string;
}) {
  if (isTodo(value)) {
    return (
      <span
        className={cn(
          "inline-block rounded-sm border border-dashed border-signal/45",
          "bg-signal-soft px-[7px] py-px font-mono text-[11.5px] tracking-[0.04em] text-signal",
          className
        )}
      >
        {value.todo}
      </span>
    );
  }

  return <span className={className}>{value}</span>;
}
