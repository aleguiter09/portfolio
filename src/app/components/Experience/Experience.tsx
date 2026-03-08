import Image from "next/image";
import Tag from "../Tag/Tag";
import { experiences } from "@/constants/experience";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="pb-10 scroll-mt-14">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        {t("experience")}
      </h2>

      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="border border-border rounded-xl p-4 md:p-6 bg-white dark:bg-surface"
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
                <ul className="mt-2 text-sm flex flex-col gap-1 leading-relaxed text-muted list-disc pl-4">
                  {experience.description.map((desc) => (
                    <li key={desc}> {t(desc)} </li>
                  ))}
                </ul>
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
