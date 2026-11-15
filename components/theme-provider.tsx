"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Aplica a classe `light` ou `dark` no <html>. Os tokens de globals.css
 * já reagem a essas classes. Sem escolha do visitante, segue o sistema.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
