"use client";
import Image from "next/image";
import Tag from "../Tag/Tag";
import { experiences } from "@/constants/experience";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="pb-10">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        {t("experience")}
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            data-animate
            className="opacity-0 translate-y-4 transition-all duration-500 ease-out border border-border rounded-xl p-6 bg-white"
          >
            <div className="flex flex-col gap-3">
              <div className="flex shrink-0 items-start gap-3">
                <Image
                  className="rounded-md object-cover"
                  src={experience.src}
                  alt={experience.alt}
                  width={36}
                  height={36}
                />
                <div className="">
                  <p className="text-sm font-medium">{experience.position}</p>
                  <p className="text-xs text-muted">
                    @ {experience.company} - {t(experience.country)}
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <p className="mt-0.5 text-xs text-muted">
                  {t(experience.date)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(experience.description)}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.stack.map((tech) => (
                    <Tag key={tech} tag_key={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
