import { Code2, Database, Monitor, Plug } from "lucide-react";

import { pipeline } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = {
  database: Database,
  plug: Plug,
  code: Code2,
  monitor: Monitor,
} as const;

export function Pipeline() {
  return (
    <div className="mt-11 overflow-x-auto rounded-md border border-border bg-card px-6 pt-[30px] pb-6">
      <p className="rail mb-[22px]">{pipeline.label}</p>

      <div className="flex min-w-[640px] items-stretch">
        {pipeline.nodes.map((node, i) => {
          const Icon = icons[node.icon];

          return (
            <div key={node.name} className="flex flex-1 items-stretch">
              <div
                className={cn(
                  "flex flex-1 flex-col gap-[5px] rounded-sm border p-[14px]",
                  node.highlight
                    ? "border-signal bg-signal-soft"
                    : "border-border bg-background"
                )}
              >
                <span
                  className={cn(
                    "flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em]",
                    node.highlight ? "text-signal" : "text-muted-foreground"
                  )}
                >
                  <Icon className="size-3" aria-hidden="true" />
                  {node.kind}
                </span>
                <span className="text-[0.93rem] font-semibold leading-tight">
                  {node.name}
                </span>
                <span className="font-mono text-[11px] leading-snug text-muted-foreground">
                  {node.detail}
                </span>
              </div>

              {i < pipeline.nodes.length - 1 ? (
                <div
                  className="flow-link relative h-0.5 w-[46px] shrink-0 self-center overflow-hidden bg-border"
                  style={
                    { "--flow-delay": `${i * 0.65}s` } as React.CSSProperties
                  }
                  aria-hidden="true"
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="mt-5 border-t border-border pt-4 text-[0.87rem] text-muted-foreground">
        {pipeline.note}
      </p>
    </div>
  );
}
