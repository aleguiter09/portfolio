import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="pb-8 scroll-mt-24">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        {t("title")}
      </h2>
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-white p-4">
        <p className="text-sm text-muted max-w-md">{t("description")}</p>
        <a
          href="mailto:aleguiter9@gmail.com"
          className="inline-flex items-center w-fit gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          <Mail size={16} />
          {t("getInTouch")}
        </a>
      </div>
    </section>
  );
}
