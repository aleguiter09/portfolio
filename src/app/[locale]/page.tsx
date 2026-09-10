import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import {
  getExperiences,
  getProjects,
  getSite,
  imageSrc,
  type Locale,
} from "@/lib/content";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const typedLocale = locale as Locale;

  const [site, experiences, projects] = await Promise.all([
    getSite(),
    getExperiences(typedLocale),
    getProjects(typedLocale),
  ]);

  return (
    <>
      <About
        name={site.name}
        role={site.role}
        photoSrc={imageSrc(site.photo, "/images/")}
        photoAlt={site.photoAlt || site.name}
        yearsExperience={site.yearsExperience ?? 0}
        specialty={site.specialty}
        locationCity={site.locationCity}
        email={site.email}
      />
      <Experience items={experiences} />
      <Projects items={projects} />
      <Contact email={site.email} />
    </>
  );
}
