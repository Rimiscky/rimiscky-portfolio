"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ReactLenis root options={{ lerp: 0.12, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
