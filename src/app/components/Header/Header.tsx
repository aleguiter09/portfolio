import "./Header.scss";
import Image from "next/image";
import Link from "next/link";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Header() {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <li className="list_item">
          <Link href="https://github.com/aleguiter09" target="_blank">
            <Image src={github.src} alt="github-icon" width={20} height={20} />
          </Link>
        </li>
        <li className="list_item">
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
        </li>
      </ul>
    </nav>
  );
}
