import "./Header.scss";
import Image from "next/image";
import Link from "next/link";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import download from "@/assets/icons/download.svg";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import ToggleLang from "../ToggleLang/ToggleLang";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link href="#about">{t("about")}</Link>
          </li>
          <li className="navbar__item">
            <Link href="#projects">{t("projects")}</Link>
          </li>
        </ul>
      </nav>
      <div className="external__icons">
        <Link href="https://github.com/aleguiter09" target="_blank">
          <Image
            className="gray-img"
            src={github.src}
            alt="github-icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alejandroguiter"
          target="_blank"
        >
          <Image
            className="gray-img"
            src={linkedin.src}
            alt="linkedin-icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="/files/aguiter-cv-english.pdf"
          target="_blank"
          download="Alejandro Guiter - CV"
        >
          <Image
            className="gray-img"
            src={download.src}
            alt="download-icon"
            width={20}
            height={20}
          />
        </Link>
        <ToggleTheme />
        <ToggleLang />
      </div>
    </header>
  );
}
