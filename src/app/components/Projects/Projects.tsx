import "./Projects.scss";
import Image from "next/image";
import { projects } from "@/constants/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="projects__section">
        {projects.map((project) => {
          return (
            <div className="project_container" key={project.id}>
              <div className="project_description_container">
                <Image
                  className="project__image"
                  src={project.src}
                  alt={project.alt}
                  width="90"
                  height="90"
                />
                <div className="project__details">
                  <Link
                    className="project__title"
                    href={project.link}
                    target="_blank"
                  >
                    <h4>{project.title}</h4>
                  </Link>
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

              <div className="project__images">
                {project.images.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      className="project__image"
                      src={image}
                      alt={project.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
