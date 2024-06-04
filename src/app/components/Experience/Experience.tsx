import "./Experience.scss";
import Card from "../Card/Card";
import Image from "next/image";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <section className="experience">
      <h3>Experience</h3>
      <div className="experience__container">
        {experiences.map((experience) => {
          return (
            <Card key={experience.id}>
              <Image
                src={experience.src}
                alt={experience.alt}
                width="90"
                height="90"
              />
              <div className="experience__description">
                <h4 className="">{experience.position}</h4>
                <p className="">{experience.company}</p>
                <p className="">{experience.date}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
