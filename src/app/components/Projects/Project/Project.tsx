"use client";
import "./Project.scss";
import Link from "next/link";
import Image from "next/image";
import Tag from "../../Tag/Tag";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Project({
  id,
  alt,
  link,
  code_link,
  title,
  description,
  stack,
  images,
}) {
  const t = useTranslations("Projects");

  useEffect(() => {
    const content = document.querySelector(".project__images");

    if (content) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("project__images--show");
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(content);
    }
  }, []);

  return (
    <div className="project_container" key={id}>
      <div className="project__images">
        {images.map((image: string, index: number) => {
          return (
            <Image
              key={alt + index}
              className="project__image"
              src={image}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
            />
          );
        })}
      </div>
      <div className="project_description_container">
        <div className="project__details">
          <h4 className="project__title">{title}</h4>
          <div className="project__stack">
            {stack.map((stack: string) => {
              return <Tag key={stack} tag_key={stack} />;
            })}
          </div>
          <p className="project__description">{t(description)}</p>
          <div className="project__actions">
            <Link href={code_link} target="_blank" className="project__button">
              {t("code")}
            </Link>
            <Link
              href={link}
              target="_blank"
              className="project__button primary"
            >
              {t("preview")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
