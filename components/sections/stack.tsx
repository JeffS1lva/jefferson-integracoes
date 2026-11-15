import { Field } from "@/components/fillable";
import { Section } from "@/components/section";
import { stack } from "@/lib/content";

export function Stack() {
  return (
    <Section rail={stack.rail} title={stack.title} sub={stack.sub}>
      <div className="flex flex-wrap gap-[7px]">
        {stack.items.map((item) => (
          <span
            key={item}
            className="rounded-sm border border-border bg-card px-2.5 py-[5px] font-mono text-xs"
          >
            {item}
          </span>
        ))}
        <Field value={stack.pending} />
      </div>
    </Section>
  );
}
