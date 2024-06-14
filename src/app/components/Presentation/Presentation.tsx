import "./Presentation.scss";
import Image from "next/image";

export default function Presentation() {
  return (
    <section id="presentation" className="presentation">
      <Image
        className="presentation__image"
        src="/images/me.jpg"
        alt="profile"
        width="150"
        height="150"
      />
      <div className="presentation__text">
        <h1 className="presentation__title">Alejandro Guiter</h1>
        <h3 className="presentation__description">
          <span>+4 years</span> as Software Developer
        </h3>
      </div>
    </section>
  );
}
