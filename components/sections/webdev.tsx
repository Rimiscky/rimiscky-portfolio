"use client";

import { Code2 } from "lucide-react";
import { webProjects, webStack } from "@/lib/data";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/reveal";

export function WebDev() {
  return (
    <section id="web" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          kicker="Développement Web"
          title="Du pixel au code"
          description="Je conçois et développe des sites performants, du CMS sur mesure à l'intégration soignée."
        />

        <Reveal>
          <div className="mb-12 flex flex-wrap justify-center gap-2.5">
            {webStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs font-medium text-foreground/80 transition-all duration-300 hover:scale-105 hover:border-accent/40"
              >
                <Code2 className="h-3.5 w-3.5 text-accent" aria-hidden />
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {webProjects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                <p className="font-mono text-xs font-medium tracking-wide text-accent">
                  {project.type}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
