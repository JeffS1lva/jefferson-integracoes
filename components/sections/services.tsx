import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section rail={services.rail} title={services.title} sub={services.sub}>
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item) => (
          <Card
            key={item.n}
            className="gap-2.5 rounded-md py-5 shadow-none"
          >
            <CardContent className="flex flex-col gap-2.5 px-5">
              <span className="font-mono text-[11px] tracking-[0.1em] text-signal">
                {item.n}
              </span>
              <h3 className="font-display text-[1.02rem] font-semibold tracking-[-0.008em]">
                {item.title}
              </h3>
              <p className="text-[0.92rem] text-muted-foreground">
                {item.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
