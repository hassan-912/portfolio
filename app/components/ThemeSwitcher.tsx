"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // On mount, check for saved theme
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const selectTheme = (selected: "light" | "dark") => {
    setTheme(selected);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", selected);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(selected);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
      <button
        onClick={() => selectTheme("light")}
        className={`p-3 rounded-full border transition-all duration-300 ${theme === "light" ? "bg-yellow-300 border-yellow-500" : "bg-white border-gray-300"}`}
        aria-label="Switch to light mode"
      >
        🌞
      </button>
      <button
        onClick={() => selectTheme("dark")}
        className={`p-3 rounded-full border transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white border-gray-300"}`}
        aria-label="Switch to dark mode"
      >
        🌙
      </button>
    </div>
  );
} 