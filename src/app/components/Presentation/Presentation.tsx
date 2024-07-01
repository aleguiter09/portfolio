import "./Presentation.scss";
import location from "../../../../public/images/location.svg";
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
        <div className="presentation__location">
          <Image
            className="presentation__icon"
            width={15}
            height={15}
            loading="lazy"
            src={location.src}
            alt="location-icon"
          />
          <span className="presentation__location_text">Madrid, Spain</span>
        </div>
      </div>
    </section>
  );
}
