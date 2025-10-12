"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { THEME_MODES } from "@/constants/globals.constants";
import type { NavigationTabKey } from "@/types/globals.types";
import { cn } from "@/utils/cn";
import Navigation from "./components/Navigation";
import {
  headerStyles,
  themeToggleStyles,
  getThemeToggleClasses,
} from "./header.styles";
import { useInitialLoad } from "./hooks/useInitialLoad";

interface HeaderProps {
  onNavClick: (page: NavigationTabKey) => void;
  currentPage: NavigationTabKey;
}

/**
 * ヘッダーコンポーネント
 * テーマ切り替え、ナビゲーション、ポートフォリオタイトルを含む
 */
export default function Header({ onNavClick, currentPage }: HeaderProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isInitialLoad } = useInitialLoad();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK);
  };

  // テーマ切り替えボタンのレンダリング
  const renderThemeButton = () => {
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
  };

  return (
    <div className={headerStyles.container}>
      {renderThemeButton()}

      <motion.header
        className={headerStyles.header}
        initial={false}
        animate={isInitialLoad ? { height: "120px" } : { height: "60px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={headerStyles.content}>
          <section className={headerStyles.section}>
            <AnimatePresence>
              {isInitialLoad && (
                <motion.h1
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute top-2 flex max-w-full items-center justify-center px-4 py-2 text-center text-3xl font-bold break-words select-none md:px-0 md:text-4xl",
                    "text-black dark:text-white"
                  )}
                >
                  Kuji&#39;s Portfolio
                </motion.h1>
              )}
            </AnimatePresence>

            <Navigation
              onNavClick={onNavClick}
              currentPage={currentPage}
              isInitialLoad={isInitialLoad}
            />
          </section>
        </div>
      </motion.header>
    </div>
  );
}
