import "../globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { getCvHref, getSite, type Locale } from "@/lib/content";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata = {
  title: "Alejandro Guiter | Software Engineer",
  description:
    "Portfolio of Alejandro Guiter, a Software Engineer based in Madrid, Spain.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["apple-touch-icon.png"],
    shortcut: ["apple-touch-icon.png"],
  },
};

export const viewport = {
  themeColor: "#fafafa",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const site = await getSite();
  const cvHref = getCvHref(site, locale as Locale);

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto max-w-2xl px-6">
            <Header
              githubUrl={site.githubUrl}
              linkedinUrl={site.linkedinUrl}
              cvHref={cvHref}
            />
            <main>{children}</main>
            <Footer name={site.name} />
          </div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
