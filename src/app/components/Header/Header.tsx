import "./Header.scss";
import Image from "next/image";
import Link from "next/link";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link href="#about">About</Link>
          </li>
          <li className="navbar__item">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="navbar__item">
            <Link href="mailto:aleguiter9@gmail.com">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="external__icons">
        <Link href="https://github.com/aleguiter09" target="_blank">
          <Image src={github.src} alt="github-icon" width={20} height={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alejandroguiter"
          target="_blank"
        >
          <Image
            src={linkedin.src}
            alt="linkedin-icon"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </header>
  );
}
