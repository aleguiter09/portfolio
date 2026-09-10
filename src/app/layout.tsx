import type { ReactNode } from "react";

/**
 * Root layout must exist so /keystatic can live outside [locale].
 * html/body are provided by [locale]/layout and keystatic/layout.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
