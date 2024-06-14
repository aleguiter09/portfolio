import "./Projects.scss";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="projects__section">
        {projects.map((project) => {
          return (
            <div className="project_container" key={project.id}>
              <Image
                className="project__image"
                src={project.src}
                alt={project.alt}
                width="90"
                height="90"
              />
              <div className="project__details">
                <h4 className="project__title">{project.title}</h4>
                <p className="project__description">{project.description}</p>
                <div className="project__stack">
                  {project.stack.map((stack) => {
                    return (
                      <span key={stack} className="project__tech">
                        {stack}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
