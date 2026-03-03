import Project from "./Project/Project";
import { projects } from "@/constants/projects";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="pb-8 scroll-mt-14">
      <h2 className="mb-8 text-lg font-semibold tracking-tight">
        {t("projects")}
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
