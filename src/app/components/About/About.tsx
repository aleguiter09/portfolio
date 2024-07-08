import "./About.scss";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <Image
        className="about__image"
        src="/images/me.jpg"
        alt="profile"
        width="150"
        height="150"
      />
      <div className="about__text">
        <h1 className="about__title">Alejandro Guiter</h1>
        <div className="about__portions">
          <div className="about__portion">
            <span className="portion__main">+4 years</span>{" "}
            <span className="portion__secondary">as Software Developer</span>
          </div>
          <div className="about__portion">
            <span className="portion__main">+15 projects</span>{" "}
            <span className="portion__secondary">with worldwide companies</span>
          </div>
          <div className="about__portion">
            <span className="portion__main">Based in</span>
            <span className="portion__secondary">Madrid, Spain</span>
          </div>
          <div className="about__portion">
            <span className="portion__main">Contact</span>
            <span className="portion__secondary">
              <a href="mailto:aleguiter9@gmail.com">aleguiter9@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
