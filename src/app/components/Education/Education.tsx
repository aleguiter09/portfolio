import "./Education.scss";
import Card from "../Card/Card";
import Image from "next/image";
import { education } from "@/constants/education";

export default function Education() {
  return (
    <div className="education">
      <h3 className="text-xl font-semibold">Education</h3>
      <div className="edu-container">
        {education.map((edu) => {
          return (
            <Card key={edu.id}>
              <Image src={edu.src} alt={edu.alt} width="90" height="90" />
              <div className="flex flex-col p-2">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-gray-700">{edu.university}</p>
                <p className="text-gray-700">{edu.date}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
