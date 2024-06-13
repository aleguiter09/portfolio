import "./globals.css";
import "./layout.scss";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alejandro Guiter",
  description: "Alejandro Guiter's Porftolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`layout ${inter.className}`}>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
