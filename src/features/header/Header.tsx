"use client";

import { motion } from "framer-motion";
import type { NavigationTabKey } from "@/types/globals.types";
import { Navigation, PortfolioTitle, ThemeToggle } from "./components";
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
      <ThemeToggle />

      <motion.header
        className={headerStyles.header}
        initial={false}
        animate={isInitialLoad ? { height: "120px" } : { height: "60px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={headerStyles.content}>
          <section className={headerStyles.section}>
            <PortfolioTitle isInitialLoad={isInitialLoad} />

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
