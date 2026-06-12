"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal, SectionHeading, TextReveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <SectionHeading
          kicker="Contact"
          title="Travaillons ensemble"
          description="Un projet photo, vidéo, design ou web ? Parlons-en."
        />

        <Reveal>
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-tight transition-colors duration-300 hover:text-accent sm:text-4xl"
          >
            <Mail className="h-6 w-6 text-accent sm:h-8 sm:w-8" aria-hidden />
            <TextReveal text={site.email} />
            <ArrowUpRight className="h-5 w-5 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-6 sm:w-6" aria-hidden />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={site.phoneHref}
            className="mt-6 inline-flex items-center gap-2.5 text-base font-medium text-muted transition-colors duration-300 hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {site.phone}
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {[{ label: "Portfolio", href: site.url }, ...site.socials].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
