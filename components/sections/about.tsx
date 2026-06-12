"use client";

import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";
import { experiences, site, skills } from "@/lib/data";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/reveal";

export function About() {
  return (
    <section id="a-propos" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          kicker="À propos"
          title="Un profil hybride, entre image et code"
          description="Étudiant en Mastère Directeur de Projet IA, titulaire d'un Bachelor Chef de Projet Digital. Je crée des contenus et des expériences qui font rayonner les marques."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold tracking-[0.15em] uppercase text-muted">
                <Briefcase className="h-4 w-4 text-accent" aria-hidden />
                Expériences
              </h3>
            </Reveal>
            <Stagger className="space-y-4">
              {experiences.map((exp) => (
                <StaggerItem key={exp.company}>
                  <article className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold tracking-tight">{exp.role}</h4>
                      <span className="text-sm font-medium text-accent">{exp.company}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{exp.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal className="mb-10">
              <div className="group relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-black/10 lg:mx-0">
                <Image
                  src="/about/portrait.jpg"
                  alt={`Portrait de ${site.name}`}
                  width={936}
                  height={1400}
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pt-14 pb-4 text-sm font-medium text-white">
                  {site.name} — {site.title}
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold tracking-[0.15em] uppercase text-muted">
                <GraduationCap className="h-4 w-4 text-accent" aria-hidden />
                Compétences
              </h3>
            </Reveal>
            <Stagger className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <StaggerItem key={skill}>
                  <span className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:text-foreground">
                    {skill}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2} className="mt-8">
              <div className="rounded-2xl border border-line bg-gradient-to-br from-accent/10 via-surface to-surface p-6">
                <p className="text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">Formation.</span>{" "}
                  Mastère Directeur de Projet IA (en cours) — Bachelor Chef de Projet
                  Digital. Une double culture créative et technique au service de
                  projets digitaux complets.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
