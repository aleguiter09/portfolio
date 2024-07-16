import "../globals.css";
import "./layout.scss";
import { Noto_Sans } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alejandro Guiter | Software Developer",
  description: "Alejandro Guiter's Porftolio",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["apple-touch-icon.png"],
    shortcut: ["apple-touch-icon.png"],
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`layout ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
