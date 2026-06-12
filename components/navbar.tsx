"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const goTo = (href: string) => {
    setOpen(false);
    lenis?.scrollTo(href, { offset: -72, duration: 1.4 });
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled
            ? "mt-3 h-14 max-w-4xl rounded-2xl border border-line bg-surface/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "h-18 border-transparent bg-transparent py-5"
        )}
      >
        <button
          onClick={() => lenis?.scrollTo(0, { duration: 1.4 })}
          className="text-sm font-semibold tracking-tight"
          aria-label="Retour en haut"
        >
          Rimiscky<span className="text-accent">.</span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => goTo(link.href)}
              className="text-[13px] font-medium text-muted transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/60 text-muted lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-4 mt-2 rounded-2xl border border-line bg-surface/90 p-4 shadow-xl backdrop-blur-xl lg:hidden"
            aria-label="Navigation mobile"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
