import "../globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto max-w-2xl px-6">
            <Header />
            <main className="py-12">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
