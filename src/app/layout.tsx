import Link from "next/link";
import "./globals.css";
import "./layout.scss";
import { Noto_Sans } from "next/font/google";
import Header from "./components/Header/Header";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`layout ${inter.className}`}>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
