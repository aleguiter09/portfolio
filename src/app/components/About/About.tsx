import { useTranslations } from "next-intl";
import "./About.scss";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

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
            <span className="portion__main">+5 {t("years")}</span>
            <span className="portion__secondary">{t("as")}</span>
          </div>
          <div className="about__portion">
            <span className="portion__main">+15 {t("projects")}</span>
            <span className="portion__secondary">{t("with")}</span>
          </div>
          <div className="about__portion">
            <span className="portion__main">{t("based")}</span>
            <span className="portion__secondary">Madrid, {t("spain")}</span>
          </div>
          <div className="about__portion">
            <span className="portion__main">{t("contact")}</span>
            <span className="portion__secondary">
              <a href="mailto:aleguiter9@gmail.com">aleguiter9@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
