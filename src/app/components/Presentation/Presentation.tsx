import "./Presentation.scss";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="presentation">
      <Image
        className="presentation__image"
        src="/images/me.jpg"
        alt="profile"
        width="100"
        height="100"
      />
      <div className="presentation__text">
        <h1 className="presentation__title">Alejandro Guiter</h1>
        <h3 className="presentation__description">Software Developer</h3>
      </div>
    </section>
  );
}
