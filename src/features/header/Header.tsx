"use client";

import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { NAVIGATION_TABS } from "@/constants/globals.constants";
import type { NavigationTabKey } from "@/types/globals.types";
import { Navigation, PortfolioTitle } from "./components";
import { headerStyles } from "./Header.styles";
import { useHeader } from "./useHeader";

interface HeaderProps {
  onNavClick: (page: NavigationTabKey) => void;
  currentPage: NavigationTabKey;
}

/**
 * ヘッダーコンポーネント
 * テーマ切り替え、ナビゲーション、ポートフォリオタイトルを含む
 */
export default function Header({ onNavClick, currentPage }: HeaderProps) {
  const { isInitialLoad } = useHeader();

  return (
    <div className={headerStyles.container}>
      {/* テーマ切り替えボタン */}
      <ThemeToggle />

      <motion.header
        className={headerStyles.header}
        initial={false}
        animate={isInitialLoad ? { height: "120px" } : { height: "60px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={headerStyles.content}>
          <section className={headerStyles.section}>
            {/* ポートフォリオタイトル */}
            <PortfolioTitle isInitialLoad={isInitialLoad} />

            {/* ナビゲーション */}
            <Navigation
              onNavClick={onNavClick}
              currentPage={currentPage}
              isInitialLoad={isInitialLoad}
              navigationTabs={NAVIGATION_TABS}
            />
          </section>
        </div>
      </motion.header>
    </div>
  );
}
