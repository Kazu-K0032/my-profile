"use client";

import { motion } from "framer-motion";
import { NAVIGATION_TABS } from "@/constants/globals.constants";
import type { NavigationTabKey } from "@/types/globals.types";
import { getNavigationButtonClasses, navigationStyles } from "../Header.styles";

interface NavigationProps {
  onNavClick: (page: NavigationTabKey) => void;
  currentPage: NavigationTabKey;
  isInitialLoad: boolean;
}

/**
 * ナビゲーション
 */
export default function Navigation({
  onNavClick,
  currentPage,
  isInitialLoad,
}: NavigationProps) {
  /**
   * ナビゲーションクリック時の処理
   * @param navName ナビゲーション名
   */
  const handleNav = (navName: NavigationTabKey) => {
    onNavClick(navName);
  };

  return (
    <motion.nav
      className={navigationStyles.nav}
      initial={{ y: 30 }}
      animate={{
        y: isInitialLoad ? 30 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ul className={navigationStyles.list}>
        {NAVIGATION_TABS.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => handleNav(tab.key as NavigationTabKey)}
              className={getNavigationButtonClasses(currentPage === tab.key)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
