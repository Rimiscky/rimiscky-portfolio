"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "@/lib/data";
import { ease, SectionHeading } from "@/components/reveal";

export function Photography() {
  const [active, setActive] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const lenis = useLenis();

  const close = useCallback(() => {
    setActive(null);
    setZoomed(false);
  }, []);

  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % photos.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    []
  );

  useEffect(() => {
    if (active === null) {
      lenis?.start();
      return;
    }
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, next, prev, lenis]);

  return (
    <section id="photographie" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          kicker="Photographie"
          title="Capturer la lumière, raconter une histoire"
          description="Portraits, lifestyle, événementiel — une sélection de mes séries photographiques."
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease }}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-surface-2 break-inside-avoid"
              aria-label={`Agrandir : ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-4 left-4 translate-y-2 text-xs font-medium tracking-wide text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Voir en plein écran
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Visionneuse photo"
          >
            <button
              onClick={close}
              aria-label="Fermer"
              className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
                setZoomed(false);
              }}
              aria-label="Photo précédente"
              className="absolute left-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
                setZoomed(false);
              }}
              aria-label="Photo suivante"
              className="absolute right-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: zoomed ? 1.4 : 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease }}
              className={zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                width={photos[active].width}
                height={photos[active].height}
                sizes="100vw"
                className="max-h-[88svh] w-auto rounded-lg object-contain select-none"
                priority
              />
            </motion.div>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium tracking-widest text-white/60">
              {active + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
