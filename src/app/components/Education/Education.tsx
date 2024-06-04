import "./Education.scss";
import Card from "../Card/Card";
import Image from "next/image";
import { education } from "@/constants/education";

export default function Education() {
  return (
    <section className="education">
      <h3>Education</h3>
      <div className="education__container">
        {education.map((edu) => {
          return (
            <Card key={edu.id}>
              <Image src={edu.src} alt={edu.alt} width="90" height="90" />
              <div className="education__details">
                <h4 className="">{edu.degree}</h4>
                <p className="">{edu.university}</p>
                <p className="">{edu.date}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
