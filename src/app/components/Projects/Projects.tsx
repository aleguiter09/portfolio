import "./Projects.scss";
import Card from "../Card/Card";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section className="projects">
      <h3 className="">Projects</h3>
      <div className="projects__container">
        {projects.map((edu) => {
          return (
            <Card key={edu.id}>
              <Image
                className="projects__image"
                src={edu.src}
                alt={edu.alt}
                width="90"
                height="90"
              />
              <div className="projects__details">
                <p className="">{edu.description}</p>
                <div className="projects__stack">
                  {edu.stack.map((stack) => {
                    return (
                      <span key={stack} className="projects__tech">
                        {stack}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
