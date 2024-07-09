import "./Project.scss";
import Link from "next/link";
import Image from "next/image";

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
              return (
                <span key={stack} className="project__tech">
                  {stack}
                </span>
              );
            })}
          </div>
          <p className="project__description">{description}</p>
          <div className="project__actions">
            <Link href={link} target="_blank" className="project__button">
              Preview
            </Link>
            <Link href={code_link} target="_blank" className="project__button">
              Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
