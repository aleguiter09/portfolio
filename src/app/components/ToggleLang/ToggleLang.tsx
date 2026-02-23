"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ToggleLang() {
  const pathname = usePathname();
  const isSpanish = pathname?.includes("/es");
  const urlToRedirect = isSpanish ? "/en" : "/es";

  return (
    <Link
      href={urlToRedirect}
      className="text-sm font-medium text-muted transition-colors hover:text-foreground"
      aria-label={isSpanish ? "Switch to English" : "Cambiar a Español"}
    >
      {isSpanish ? "EN" : "ES"}
    </Link>
  );
}
