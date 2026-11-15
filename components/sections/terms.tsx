import { Clock, FileText, GitBranch, Phone } from "lucide-react";

import { Section } from "@/components/section";
import { terms } from "@/lib/content";

const icons = {
  file: FileText,
  clock: Clock,
  branch: GitBranch,
  call: Phone,
} as const;

export function Terms() {
  return (
    <Section rail={terms.rail} title={terms.title} sub={terms.sub}>
      <dl className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
        {terms.items.map((item) => {
          const Icon = icons[item.icon];

          return (
            <div key={item.label} className="bg-card px-[18px] pt-[18px] pb-[17px]">
              <dt className="mb-[7px] flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground">
                <Icon className="size-3" aria-hidden="true" />
                {item.label}
              </dt>
              <dd className="text-[0.97rem] font-medium leading-snug">
                {item.value}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
