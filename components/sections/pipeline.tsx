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
    <div className="mt-11 rounded-2xl border border-border bg-card p-5 sm:p-6">
      <p className="rail mb-6">{pipeline.label}</p>

      <ol className="flex flex-col gap-3 md:flex-row md:gap-14">
        {pipeline.nodes.map((node, i) => {
          const Icon = icons[node.icon];
          const isLast = i === pipeline.nodes.length - 1;

          return (
            <li key={node.name} className="relative flex flex-1">
              <div
                className={cn(
                  "flex flex-1 flex-col gap-2.5 rounded-xl border p-4 transition-colors hover:border-signal/50",
                  node.highlight
                    ? "border-signal bg-signal-soft"
                    : "border-border bg-background"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "flex items-center gap-1.5 whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.1em]",
                      node.highlight ? "text-signal" : "text-muted-foreground"
                    )}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {node.kind}
                  </span>
                  <span className="font-mono text-[10.5px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="font-display text-[1.05rem] leading-snug font-semibold md:min-h-[2.6rem]">
                  {node.name}
                </span>

                <span className="mt-auto text-[0.83rem] leading-snug text-muted-foreground">
                  {node.detail}
                </span>
              </div>

              {/* Transição entre passos: pulso de dados no desktop, linha no celular. */}
              {!isLast ? (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 left-1/2 h-3 w-0.5 -translate-x-1/2 rounded-full bg-border md:hidden"
                  />
                  <span
                    aria-hidden="true"
                    style={
                      { "--flow-delay": `${i * 0.65}s` } as React.CSSProperties
                    }
                    className="flow-link absolute top-1/2 left-full hidden h-0.5 w-14 -translate-y-1/2 overflow-hidden rounded-full bg-border md:block"
                  />
                </>
              ) : null}
            </li>
          );
        })}
      </ol>

      <p className="mt-6 border-t border-border pt-4 text-[0.9rem] leading-relaxed text-muted-foreground">
        {pipeline.note}
      </p>
    </div>
  );
}
