import Project from "./Project/Project";
import "./Projects.scss";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="projects__section">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}
