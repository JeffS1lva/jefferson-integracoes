import { Field } from "@/components/fillable";
import { Section } from "@/components/section";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section rail={experience.rail} title={experience.title}>
      {experience.roles.map((role, i) => (
        <article
          key={i}
          className="overflow-hidden rounded-md border border-border bg-card"
        >
          <header className="flex flex-col gap-2 px-6 pt-6 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h3 className="font-display text-[1.2rem] font-semibold tracking-[-0.012em] text-balance">
                <Field value={role.title} />
              </h3>
              <p className="mt-1.5 text-[0.9rem] text-muted-foreground">
                {role.org}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs tabular-nums tracking-[0.03em] text-muted-foreground">
              <Field value={role.when} />
            </span>
          </header>

          <div className="border-t border-border px-6 pt-5 pb-6">
            <p className="mb-5 max-w-[62ch] text-[0.97rem] leading-relaxed">
              {role.summary}
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {role.projects.map((project, n) => (
                <li
                  key={project.label}
                  className={`flex flex-col gap-1.5 rounded-sm border border-border bg-background p-4 ${
                    n === role.projects.length - 1 &&
                    role.projects.length % 2 === 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[10.5px] tracking-[0.1em] text-signal">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-[0.98rem] font-semibold">
                    {project.label}
                  </h4>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                    {project.body}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-5 border-t border-border pt-4 font-mono text-[11.5px] tracking-[0.02em] text-muted-foreground">
              {role.support}
            </p>
          </div>
        </article>
      ))}
    </Section>
  );
}
