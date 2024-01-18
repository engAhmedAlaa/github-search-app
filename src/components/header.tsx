import { useState, useEffect } from "react";
import { ThemeType } from "@/types/theme.type";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

function getTheme() {
  const activeTheme = localStorage.getItem("theme") as ThemeType;
  const initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  if (localStorage.getItem("theme")) return activeTheme;

  return initialTheme;
}

function applyTheme(theme: ThemeType) {
  const htmlElement = document.documentElement;
  const metaTheme = document
    .getElementsByTagName("meta")
    .namedItem("theme-color")!;

  if (theme === "dark") {
    htmlElement.classList.add("dark");
    metaTheme.content = "#09090b";
  } else {
    htmlElement.classList.remove("dark");
    metaTheme.content = "#ffffff";
  }
}

export function Header() {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeToggle() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  applyTheme(theme);

  return (
    <header className="flex items-center justify-between gap-4">
      <Logo />
      <ThemeToggle theme={theme} handleChange={handleThemeToggle} />
    </header>
  );
}
