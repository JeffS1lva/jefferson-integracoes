import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Terms } from "@/components/sections/terms";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto max-w-[860px] px-5 pb-20">
      <Hero />
      <Services />
      <Stack />
      <Experience />
      <Terms />
      <Contact />

      <footer className="mt-14 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
        <span>{profile.name}</span>
        <span>Integrações SAP B1 · Node · TypeScript</span>
        <span>{profile.location}</span>
      </footer>
    </main>
  );
}
