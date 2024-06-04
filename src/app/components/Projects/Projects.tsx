import "./Projects.scss";
import Card from "../Card/Card";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <div className="projects w-full">
      <h3 className="text-xl font-semibold">Projects</h3>
      <div className="pro-container">
        {projects.map((edu) => {
          return (
            <Card key={edu.id}>
              <Image
                className="pro-image"
                src={edu.src}
                alt={edu.alt}
                width="90"
                height="90"
              />
              <div className="pro-details">
                <h4 className="font-semibold">{edu.title}</h4>
                <p className="text-gray-700 mb-2">{edu.description}</p>
                <div className="pro-stack">
                  {edu.stack.map((stack) => {
                    return (
                      <span
                        key={stack}
                        className="pro-tech text-xs rounded-md p-1.5 bg-gray-100 text-gray-600 font-semibold"
                      >
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
    </div>
  );
}
