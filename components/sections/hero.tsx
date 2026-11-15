import { Badge } from "@/components/ui/badge";
import { Pipeline } from "@/components/sections/pipeline";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <header className="pt-12">
      <div className="mb-7 flex flex-wrap items-center gap-x-3.5 gap-y-2 font-mono text-[12.5px] tracking-[0.08em] text-muted-foreground">
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

      <h1 className="mb-5 max-w-[19ch] font-display text-[clamp(2rem,6.2vw,3.35rem)] font-bold leading-[1.04] tracking-[-0.022em] text-balance">
        {profile.headline.before}
        <span className="text-signal">{profile.headline.emphasis}</span>
        {profile.headline.after}
      </h1>

      <p className="mb-7 max-w-[60ch] text-[1.1rem] text-muted-foreground">
        {profile.lede}
      </p>

      <Badge
        variant="outline"
        className="gap-2.5 rounded-sm border-signal/30 bg-signal-soft px-3.5 py-[7px] font-mono text-xs uppercase tracking-[0.06em] text-signal"
      >
        <span className="size-[7px] shrink-0 rounded-full bg-signal" />
        {profile.status}
      </Badge>

      <Pipeline />
    </header>
  );
}
