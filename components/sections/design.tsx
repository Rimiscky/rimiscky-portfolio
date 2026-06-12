"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { designItems, type DesignItem } from "@/lib/data";
import { SectionHeading } from "@/components/reveal";
import { cn } from "@/lib/utils";

const spanClasses: Record<DesignItem["span"], string> = {
  big: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export function Design() {
  return (
    <section id="design" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          kicker="Design & Graphisme"
          title="Des identités qui marquent"
          description="Covers, affiches, interfaces et contenus réseaux sociaux — du concept à la livraison."
        />

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[230px]">
          {designItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-line bg-surface-2",
                spanClasses[item.span]
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-3 translate-y-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
