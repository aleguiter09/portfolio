import Link from "next/link";
import Image from "next/image";
import Tag from "../../Tag/Tag";
import { useTranslations } from "next-intl";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectProps {
  alt: string;
  link: string;
  code_link: string;
  title: string;
  description: string;
  stack: string[];
  images: string[];
}

export default function Project({
  alt,
  link,
  code_link,
  title,
  description,
  stack,
  images,
}: ProjectProps) {
  const t = useTranslations("Projects");

  return (
    <div className="rounded-xl border border-border overflow-hidden">
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

      <div className="p-5 bg-white dark:bg-surface">
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
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-colors hover:opacity-90"
          >
            <ExternalLink size={14} strokeWidth={1.5} />
            {t("preview")}
          </Link>
        </div>
      </div>
    </div>
  );
}
