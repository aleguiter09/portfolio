import "./Projects.scss";
import Project from "./Project/Project";
import { projects } from "@/constants/projects";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">{t("projects")}</h3>
      <div className="projects__section">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}
