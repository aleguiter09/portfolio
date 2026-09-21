"use client";

import Link from "next/link";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import ToggleLang from "../ToggleLang/ToggleLang";
import { useTranslations } from "next-intl";
import { useState } from "react";

type HeaderProps = {
  githubUrl: string;
  linkedinUrl: string;
  cvHref: string;
};

export default function Header({
  githubUrl,
  linkedinUrl,
  cvHref,
}: HeaderProps) {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {t("experience")}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {t("projects")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-muted transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={1.5} />
          </Link>
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-muted transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </Link>
          <Link
            href={cvHref}
            target="_blank"
            download="Alejandro Guiter - CV"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Download resume"
          >
            <Download size={18} strokeWidth={1.5} />
          </Link>
          <div className="mx-1 h-4 w-px bg-border" aria-hidden="true" />
          <ToggleTheme />
          <ToggleLang />
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
          <ul className="flex flex-col items-center py-6 gap-6">
            <li>
              <Link
                href="#about"
                onClick={closeMenu}
                className="text-lg font-medium text-muted transition-colors hover:text-foreground"
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                onClick={closeMenu}
                className="text-lg font-medium text-muted transition-colors hover:text-foreground"
              >
                {t("experience")}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={closeMenu}
                className="text-lg font-medium text-muted transition-colors hover:text-foreground"
              >
                {t("projects")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
