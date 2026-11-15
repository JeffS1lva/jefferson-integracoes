import { Link2, Mail, MessageCircle, Terminal } from "lucide-react";

import { Field } from "@/components/fillable";
import { contact } from "@/lib/content";

const icons = {
  mail: Mail,
  whatsapp: MessageCircle,
  linkedin: Link2,
  github: Terminal,
} as const;

export function Contact() {
  return (
    <div className="mt-16 rounded-md border border-border border-l-[3px] border-l-signal bg-card px-6 py-7">
      <p className="rail mb-[18px]">{contact.rail}</p>

      <h2 className="font-display text-[1.45rem] font-semibold tracking-[-0.012em] text-balance">
        {contact.title}
      </h2>
      <p className="mt-2.5 max-w-[58ch] text-muted-foreground">{contact.sub}</p>

      <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2.5">
        {contact.channels.map((channel) => {
          const Icon = icons[channel.icon];

          return (
            <li key={channel.label} className="flex flex-col gap-[3px]">
              <span className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground">
                <Icon className="size-3" aria-hidden="true" />
                {channel.label}
              </span>

              {channel.href ? (
                <a
                  href={channel.href}
                  className="w-fit border-b border-signal pb-px text-[0.98rem] font-medium transition-colors hover:text-signal"
                >
                  <Field value={channel.value} />
                </a>
              ) : (
                <Field
                  value={channel.value}
                  className="text-[0.98rem] font-medium"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
