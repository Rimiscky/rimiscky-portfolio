"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { equipment } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import { cn } from "@/lib/utils";

function TiltCard({
  item,
  index,
}: {
  item: (typeof equipment)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 25 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <Reveal delay={index * 0.12} className="h-full">
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          mx.set(0.5);
          my.set(0.5);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10"
      >
        {/* Visuel produit façon keynote */}
        <div
          className={cn(
            "relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-64",
            item.gradient
          )}
        >
          <div
            className={cn(
              "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_60%)] transition-opacity duration-700",
              hovering ? "opacity-100" : "opacity-0"
            )}
            aria-hidden
          />
          <motion.div
            style={{ translateZ: 40 }}
            animate={{ scale: hovering ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-44 w-[78%] overflow-hidden rounded-[2rem] border border-line bg-white shadow-xl sm:h-48"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 768px) 28vw, 78vw"
              className="object-contain p-5"
            />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">{item.kicker}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

          <ul className="mt-5 space-y-2">
            {item.specs.map((spec) => (
              <li key={spec} className="flex items-center gap-2.5 text-sm text-foreground/80">
                <Check className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                {spec}
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-foreground">Pourquoi je l&apos;utilise.</span>{" "}
            {item.why}
          </p>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Equipment() {
  return (
    <section id="equipement" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          kicker="Mon équipement"
          title="Des outils à la hauteur de l'exigence"
          description="Un setup pensé pour la polyvalence : photo, vidéo et mouvement, sans jamais sacrifier la qualité d'image."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {equipment.map((item, i) => (
            <TiltCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
