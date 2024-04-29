import React from "react";
import Card from "./Card";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold">Projects</h3>
      <div className="flex flex-col gap-4 mt-3">
        {projects.map((edu) => {
          return (
            <Card key={edu.id}>
              <Image
                className="p-2"
                src={edu.src}
                alt={edu.alt}
                width="90"
                height="90"
              />
              <div className="flex flex-col p-2">
                <h4 className="font-semibold">{edu.title}</h4>
                <p className="text-gray-700 mb-2">{edu.description}</p>
                <div className="flex gap-2">
                  {edu.stack.map((stack) => {
                    return (
                      <span
                        key={stack}
                        className="text-xs rounded-md p-1.5 bg-gray-100 text-gray-600 font-semibold"
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
