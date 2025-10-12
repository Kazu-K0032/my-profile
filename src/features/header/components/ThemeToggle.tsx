"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { THEME_MODES } from "@/constants/globals.constants";
import { getThemeToggleClasses, themeToggleStyles } from "../header.styles";

/**
 * テーマ切り替えボタンコンポーネント
 */
export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * テーマ切り替え
   */
  const toggleTheme = () => {
    setTheme(theme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK);
  };

  // マウント前のプレースホルダー
  if (!mounted) {
    return (
      <button className={themeToggleStyles.placeholder}>
        <span className="text-lg">☀️</span>
        <span className="text-sm">Light</span>
      </button>
    );
  }

  const isDark = resolvedTheme === THEME_MODES.DARK;

  return (
    <button onClick={toggleTheme} className={getThemeToggleClasses(isDark)}>
      <span className="text-lg">{isDark ? "🌙" : "☀️"}</span>
      <span className="text-sm">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
