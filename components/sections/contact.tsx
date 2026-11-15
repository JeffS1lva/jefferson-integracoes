import {
  ArrowUpRight,
  Link2,
  Mail,
  MessageCircle,
  Terminal,
} from "lucide-react";

import { contact } from "@/lib/content";

const icons = {
  mail: Mail,
  whatsapp: MessageCircle,
  linkedin: Link2,
  github: Terminal,
} as const;

export function Contact() {
  return (
    <div className="mt-16 overflow-hidden rounded-md border border-border bg-card">
      <div className="border-l-[3px] border-signal px-6 pt-7 pb-6 sm:px-7">
        <p className="rail mb-[18px]">{contact.rail}</p>

        <h2 className="font-display text-[1.5rem] font-semibold tracking-[-0.015em] text-balance">
          {contact.title}
        </h2>
        <p className="mt-2.5 max-w-[58ch] text-muted-foreground">
          {contact.sub}
        </p>
      </div>

      <ul className="divide-y divide-border border-t border-border">
        {contact.channels.map((channel) => {
          const Icon = icons[channel.icon];

          return (
            <li key={channel.label}>
              <a
                href={channel.href}
                className="group flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-background sm:px-7"
              >
                <span className="flex w-[92px] shrink-0 items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground">
                  <Icon className="size-3.5" aria-hidden="true" />
                  {channel.label}
                </span>
                <span className="min-w-0 flex-1 truncate font-medium">
                  {channel.value}
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-signal"
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
