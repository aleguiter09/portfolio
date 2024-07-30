"use client";
import Image from "next/image";
import Link from "next/link";
import arg from "@/assets/icons/arg.svg";
import usa from "@/assets/icons/usa.svg";
import { usePathname } from "next/navigation";

export default function ToggleLang() {
  const pathname = usePathname();
  const urlToRedirect = pathname?.includes("es") ? "/en" : "/es";

  return (
    <Link href={urlToRedirect}>
      <Image
        src={pathname?.includes("es") ? usa.src : arg.src}
        alt="flag-icon"
        width={20}
        height={20}
      />
    </Link>
  );
}
