import "./Experience.scss";
import Card from "../CardCopy/Card";
import Image from "next/image";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="experience__section">
      <div className="experience">
        <h3 className="experience__title">Experience 💻</h3>
        <div className="experience__container">
          {experiences.map((experience) => {
            return (
              <Card key={experience.id}>
                <Image
                  className="experience__image"
                  src={experience.src}
                  alt={experience.alt}
                  width="100"
                  height="100"
                />
                <div className="experience__description">
                  <h4 className="experience__position">
                    {experience.position}
                  </h4>
                  <div className="experience__data">
                    <p>@ {experience.company}</p>
                    <p>{experience.date}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
