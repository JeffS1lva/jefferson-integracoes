import { Field } from "@/components/fillable";
import { Section } from "@/components/section";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section rail={experience.rail} title={experience.title}>
      <div className="border-b border-border">
        {experience.roles.map((role, i) => (
          <div
            key={i}
            className="grid gap-x-[22px] gap-y-2.5 border-t border-border py-5 sm:grid-cols-[120px_1fr] sm:gap-y-1"
          >
            <Field
              value={role.when}
              className="pt-[3px] font-mono text-xs tracking-[0.03em] text-muted-foreground"
            />

            <div>
              <h3 className="mb-1 font-display text-[1.05rem] font-semibold">
                <Field value={role.title} />
              </h3>
              <p className="mb-2.5 text-[0.9rem] text-muted-foreground">
                {role.org}
              </p>

              {role.bullets.length > 0 ? (
                <ul className="list-disc space-y-[5px] pl-[18px]">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="text-[0.93rem]">
                      <Field value={bullet} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
