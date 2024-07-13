"use client";
import { useEffect, useState } from "react";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import Image from "next/image";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const handleClick = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button className="toggle-button" onClick={handleClick}>
      {theme === "light" ? (
        <Image src={moon.src} alt="moon-icon" width={20} height={20} />
      ) : (
        <Image src={sun.src} alt="sun-icon" width={20} height={20} />
      )}
    </button>
  );
}
