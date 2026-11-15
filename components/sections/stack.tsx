import { Section } from "@/components/section";
import { stack } from "@/lib/content";

export function Stack() {
  return (
    <Section rail={stack.rail} title={stack.title} sub={stack.sub}>
      <dl className="grid gap-3 sm:grid-cols-2">
        {stack.groups.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-3 rounded-md border border-border bg-card p-4 transition-colors hover:border-signal/50"
          >
            <dt className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-[12.5px] text-foreground"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
