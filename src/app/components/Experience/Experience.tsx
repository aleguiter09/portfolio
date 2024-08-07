"use client";
import "./Experience.scss";
import Image from "next/image";
import Tag from "../Tag/Tag";
import { experiences } from "@/constants/experience";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  useEffect(() => {
    const content = document.querySelectorAll(".experience__info");

    if (content) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("experience__info--show");
            }
          });
        },
        { threshold: 0.3 }
      );

      content.forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);

  return (
    <section id="experience" className="experience__section">
      <div className="experience">
        <h3 className="experience__title">{t("experience")}</h3>
        <ul className="experience__container">
          {experiences.map((experience, index) => {
            return (
              <li
                className="experience__card"
                key={experience.id}
                data-date={`${t(experience.date)}`}
              >
                <div className="experience__dot"></div>
                <div className="experience__date">{t(experience.date)}</div>
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
                      <span className="experience__at">
                        @ {experience.company} - {t(experience.country)}
                      </span>
                      <p className="experience__detail">
                        {t(experience.description)}
                      </p>
                      <div className="experience__stack">
                        {experience.stack.map((stack) => {
                          return <Tag key={stack} tag_key={stack} />;
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
