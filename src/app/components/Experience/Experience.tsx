import "./Experience.scss";
import Image from "next/image";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="experience__section">
      <div className="experience">
        <h3 className="experience__title">Experience</h3>
        <ul className="experience__container">
          {experiences.map((experience, index) => {
            return (
              <li
                className="experience__card"
                key={experience.id}
                data-date={`${experience.date}`}
              >
                <div className="experience__dot"></div>
                <div className="experience__date">{experience.date}</div>
                <div className="experience__info">
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
                      <span>
                        @ {experience.company} - {experience.time}
                      </span>
                      <p>{experience.description}</p>
                      <div className="experience__stack">
                        {experience.stack.map((stack) => {
                          return (
                            <span key={stack} className="experience__tech">
                              {stack}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
