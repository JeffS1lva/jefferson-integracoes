import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Pipeline } from "@/components/sections/pipeline";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <header className="pt-16 sm:pt-20">
      <div className="rise mb-8 flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 font-mono text-[12.5px] tracking-[0.08em] text-muted-foreground">
          <strong className="font-medium tracking-[0.04em] text-foreground">
            {profile.name}
          </strong>
          <span className="size-1 shrink-0 rounded-full bg-border" />
          <span>{profile.location}</span>
          <span className="size-1 shrink-0 rounded-full bg-border" />
          <a
            href={profile.githubUrl}
            className="transition-colors hover:text-signal"
          >
            github.com/{profile.github}
          </a>
        </div>
        <ThemeToggle />
      </div>

      <h1
        className="rise mb-6 max-w-[17ch] font-display text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.028em] text-balance"
        style={{ "--d": "0.08s" } as React.CSSProperties}
      >
        {profile.headline.before}
        <span className="text-signal">{profile.headline.emphasis}</span>
        {profile.headline.after}
      </h1>

      <p
        className="rise mb-8 max-w-[58ch] text-[1.15rem] leading-relaxed text-muted-foreground"
        style={{ "--d": "0.16s" } as React.CSSProperties}
      >
        {profile.lede}
      </p>

      <Badge
        variant="outline"
        className="rise gap-2.5 rounded-sm border-signal/30 bg-signal-soft px-3.5 py-[7px] font-mono text-xs uppercase tracking-[0.06em] text-signal"
      >
        <span className="size-[7px] shrink-0 rounded-full bg-signal" />
        {profile.status}
      </Badge>

      <Pipeline />
    </header>
  );
}
