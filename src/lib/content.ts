import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const reader = createReader(process.cwd(), keystaticConfig);

export type Locale = "en" | "es";

export type LocalizedString = { en: string; es: string };

export function pickLocale(
  value: LocalizedString | null | undefined,
  locale: Locale
): string {
  if (!value) return "";
  return value[locale] || value.en || "";
}

export function imageSrc(
  path: string | null | undefined,
  publicPath: string
): string {
  if (!path) return "";
  if (path.startsWith("/")) return path;
  return `${publicPath}${path}`;
}

export async function getSite() {
  const site = await reader.singletons.site.read();
  if (!site) {
    throw new Error("Missing Keystatic singleton: site");
  }
  return site;
}

export async function getLabels() {
  const labels = await reader.singletons.labels.read();
  if (!labels) {
    throw new Error("Missing Keystatic singleton: labels");
  }
  return labels;
}

export async function getMessagesForLocale(locale: Locale) {
  const labels = await getLabels();

  return {
    Header: {
      about: pickLocale(labels.header.about, locale),
      experience: pickLocale(labels.header.experience, locale),
      projects: pickLocale(labels.header.projects, locale),
      contact: pickLocale(labels.header.contact, locale),
    },
    About: {
      years: pickLocale(labels.about.years, locale),
      as: pickLocale(labels.about.as, locale),
      spain: pickLocale(labels.about.spain, locale),
      especialized: pickLocale(labels.about.especialized, locale),
    },
    Experience: {
      experience: pickLocale(labels.experience.title, locale),
    },
    Projects: {
      projects: pickLocale(labels.projects.title, locale),
      code: pickLocale(labels.projects.code, locale),
      preview: pickLocale(labels.projects.preview, locale),
    },
    Contact: {
      title: pickLocale(labels.contact.title, locale),
      description: pickLocale(labels.contact.description, locale),
      getInTouch: pickLocale(labels.contact.getInTouch, locale),
    },
  };
}

export async function getExperiences(locale: Locale) {
  const entries = await reader.collections.experiences.all();

  return entries
    .map(({ slug, entry }) => ({
      id: slug,
      order: entry.order ?? 0,
      src: imageSrc(entry.logo, "/images/"),
      alt: entry.logoAlt || entry.company || slug,
      position: entry.position,
      company: entry.company,
      date: pickLocale(entry.date, locale),
      country: pickLocale(entry.country, locale),
      description: (entry.description || []).map((item) =>
        pickLocale(item, locale)
      ),
      stack: [...(entry.stack || [])],
    }))
    .sort((a, b) => b.order - a.order);
}

export async function getProjects(locale: Locale) {
  const entries = await reader.collections.projects.all();

  return entries
    .map(({ slug, entry }) => ({
      id: slug,
      order: entry.order ?? 0,
      src: imageSrc(entry.logo, "/images/"),
      alt: entry.logoAlt || slug,
      title: entry.title,
      link: entry.link,
      code_link: entry.codeLink,
      description: pickLocale(entry.description, locale),
      stack: [...(entry.stack || [])],
      images: (entry.screenshots || [])
        .map((shot) => imageSrc(shot, "/images/savv/"))
        .filter(Boolean),
    }))
    .sort((a, b) => b.order - a.order);
}

export function getCvHref(
  site: Awaited<ReturnType<typeof getSite>>,
  locale: Locale
): string {
  const file = locale === "es" ? site.cvEs : site.cvEn;
  const filename =
    typeof file === "string"
      ? file
      : file && typeof file === "object" && "filename" in file
        ? String((file as { filename?: string }).filename || "")
        : "";
  return filename ? `/files/${filename}` : `/files/aguiter-cv-${locale}.pdf`;
}
