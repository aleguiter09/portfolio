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
      <body className={inter.className}>
        <header>
          <nav className="flex justify-center mt-3">
            <ul className="max-w-screen-xl flex gap-6">
              <li className="cursor-pointer hover:text-blue-500">Home</li>
              <li className="cursor-pointer hover:text-blue-500">Experience</li>
              <li className="cursor-pointer hover:text-blue-500">Projects</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
