import "./Experience.scss";
import Card from "../Card/Card";
import Image from "next/image";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <div className="experience">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="exp-container">
        {experiences.map((experience) => {
          return (
            <Card key={experience.id}>
              <Image
                src={experience.src}
                alt={experience.alt}
                width="90"
                height="90"
              />
              <div className="exp-description">
                <h4 className="exp-title">{experience.position}</h4>
                <p className="exp-company">{experience.company}</p>
                <p className="exp-date">{experience.date}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
