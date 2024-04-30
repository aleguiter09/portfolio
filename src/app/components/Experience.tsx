import React from "react";
import Card from "./Card";
import Image from "next/image";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <div className="pt-12 w-full">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="flex flex-col gap-4 mt-3">
        {experiences.map((experience) => {
          return (
            <Card key={experience.id}>
              <Image
                src={experience.src}
                alt={experience.alt}
                width="90"
                height="90"
              />
              <div className="flex flex-col p-2">
                <h4 className="font-semibold">{experience.position}</h4>
                <p className="text-gray-700">{experience.company}</p>
                <p className="text-gray-700">{experience.date}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
