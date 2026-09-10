import Project from "./Project/Project";
import { useTranslations } from "next-intl";

export type ProjectItem = {
  id: string;
  alt: string;
  link: string;
  code_link: string;
  title: string;
  description: string;
  stack: string[];
  images: string[];
};

export default function Projects({ items }: { items: ProjectItem[] }) {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="pb-8 scroll-mt-14">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        {t("projects")}
      </h2>
      <div className="flex flex-col gap-8">
        {items.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
