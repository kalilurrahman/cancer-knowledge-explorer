import { useEffect, useState } from "react";

type ThemeId = "dark" | "light" | "sepia" | "midnight";

const themes: Array<{ id: ThemeId; label: string }> = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "sepia", label: "Sepia" },
  { id: "midnight", label: "Midnight" },
];

function getStoredTheme(): ThemeId {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("theme") as ThemeId) || "dark";
}

function applyTheme(theme: ThemeId) {
  const root = document.documentElement;
  root.classList.remove("dark", "light", "sepia", "midnight");
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [current, setCurrent] = useState<ThemeId>(getStoredTheme);

  useEffect(() => {
    applyTheme(current);
  }, [current]);

  return (
    <div className="flex gap-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setCurrent(t.id)}
          className={`px-2 py-0.5 rounded text-[10.5px] font-medium border transition-colors ${
            current === t.id
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary hover:text-primary"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
