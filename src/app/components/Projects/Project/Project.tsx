"use client";
import Link from "next/link";
import Image from "next/image";
import Tag from "../../Tag/Tag";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectProps {
  id: number;
  alt: string;
  link: string;
  code_link: string;
  title: string;
  description: string;
  stack: string[];
  images: string[];
}

export default function Project({
  id,
  alt,
  link,
  code_link,
  title,
  description,
  stack,
  images,
}: ProjectProps) {
  const t = useTranslations("Projects");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="opacity-0 translate-y-4 transition-all duration-500 ease-out rounded-xl border border-border overflow-hidden"
    >
      <div className="grid grid-cols-2 gap-2 overflow-x-auto p-3 bg-surface">
        {images.map((image: string, index: number) => (
          <Image
            key={alt + index}
            className="rounded-lg object-cover"
            src={image}
            alt={`${alt} screenshot ${index + 1}`}
            width={320}
            height={200}
            sizes="(max-width: 640px) 80vw, 320px"
          />
        ))}
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {t(description)}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {stack.map((tech: string) => (
            <Tag key={tech} tag_key={tech} />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface"
          >
            <Code2 size={14} strokeWidth={1.5} />
            {t("code")}
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-white transition-colors hover:opacity-90"
          >
            <ExternalLink size={14} strokeWidth={1.5} />
            {t("preview")}
          </Link>
        </div>
      </div>
    </div>
  );
}
