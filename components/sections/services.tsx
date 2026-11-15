import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section rail={services.rail} title={services.title} sub={services.sub}>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {services.items.map((item, i) => (
          <Card
            key={item.n}
            className={`group gap-4 rounded-md py-7 shadow-none transition-colors hover:border-signal/60 ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <CardContent className="flex flex-col gap-3 px-6">
              <span className="font-display text-[2rem] font-bold leading-none text-signal/80 transition-colors group-hover:text-signal">
                {item.n}
              </span>
              <h3 className="font-display text-[1.15rem] font-semibold tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="max-w-[60ch] text-[0.95rem] text-muted-foreground">
                {item.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
