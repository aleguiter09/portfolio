import "./globals.css";
import "./layout.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
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
