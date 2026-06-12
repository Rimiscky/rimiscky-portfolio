"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/lib/data";
import { TextReveal } from "@/components/reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
          Disponible pour de nouveaux projets
        </motion.p>

        <h1 className="text-5xl font-semibold tracking-tighter text-balance sm:text-7xl md:text-8xl">
          <TextReveal text="Rimiscky Sambala" className="text-gradient" delay={0.35} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-5 text-lg font-medium tracking-tight text-accent sm:text-xl"
        >
          {site.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => lenis?.scrollTo("#photographie", { offset: -72, duration: 1.6 })}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Découvrir mes projets
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => lenis?.scrollTo("#contact", { offset: -72, duration: 1.6 })}
            className="inline-flex h-12 items-center rounded-full border border-line bg-surface/50 px-7 text-sm font-semibold backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:bg-surface-2 active:scale-[0.98]"
          >
            Me contacter
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
