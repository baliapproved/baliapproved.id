import { MoonIcon, SunIcon } from "lucide-react";
import * as React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/design-system/toggle-group";

type Theme = "light" | "dark";

export function ModeToggle() {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    // The inline script in Layout.astro has already resolved the theme, so read
    // it back off the element rather than re-deriving it here.
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  function handleThemeChange(value: string[]) {
    const next = value[0];
    // A toggle group lets you press the active item to clear it; a theme is
    // never "unset", so ignore that.
    if (next !== "light" && next !== "dark") {
      return;
    }

    localStorage.setItem("theme", next);
    setTheme(next);
    document.documentElement.classList[next === "dark" ? "add" : "remove"](
      "dark",
    );
  }

  return (
    <ToggleGroup
      value={[theme]}
      onValueChange={handleThemeChange}
      size="sm"
      aria-label="Theme"
    >
      <ToggleGroupItem value="light" aria-label="Light">
        <SunIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark">
        <MoonIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
