import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Alejandro Guiter's Porftolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`pt-8 pb-4 px-3 ${inter.className} antialiased bg-gray-100 text-gray-900`}
      >
        <main className="max-w-screen-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
