import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin, Mail, Briefcase, Code2 } from "lucide-react";

type AboutProps = {
  name: string;
  role: string;
  photoSrc: string;
  photoAlt: string;
  yearsExperience: number;
  specialty: string;
  locationCity: string;
  email: string;
};

export default function About({
  name,
  role,
  photoSrc,
  photoAlt,
  yearsExperience,
  specialty,
  locationCity,
  email,
}: AboutProps) {
  const t = useTranslations("About");

  return (
    <section id="about" className="pb-8 scroll-mt-24">
      <div className="flex flex-col items-start gap-6 opacity-0 animate-fade-in-up">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full object-cover"
            src={photoSrc}
            alt={photoAlt}
            width={80}
            height={80}
            sizes="80px"
            priority
          />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-balance">
              {name}
            </h1>
            <p className="mt-1 text-sm text-muted">{role}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-between w-full text-sm opacity-0 animate-fade-in-up animate-delay-200">
          <div className="flex flex-col gap-3 text-muted">
            <div className="flex items-center gap-2 text-muted">
              <Briefcase size={15} strokeWidth={1.5} />
              <span>
                <span className="font-medium text-foreground">
                  +{yearsExperience} {t("years")}
                </span>{" "}
                {t("as")}
              </span>
            </div>

            <div className="flex items-center gap-2 text-muted">
              <MapPin size={15} strokeWidth={1.5} />
              <span>
                {locationCity}, {t("spain")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-muted">
              <Code2 size={15} strokeWidth={1.5} />
              <span>
                {t("especialized")}{" "}
                <span className="font-medium text-foreground">{specialty}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <Mail size={15} strokeWidth={1.5} />
              <a
                href={`mailto:${email}`}
                className="transition-colors hover:text-accent"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
