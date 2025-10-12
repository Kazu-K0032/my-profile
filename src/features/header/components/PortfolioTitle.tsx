"use client";

import { motion, AnimatePresence } from "framer-motion";
import { portfolioTitleStyles } from "../header.styles";

interface PortfolioTitleProps {
  isInitialLoad: boolean;
}

/**
 * ポートフォリオタイトルコンポーネント
 */
export default function PortfolioTitle({ isInitialLoad }: PortfolioTitleProps) {
  return (
    <AnimatePresence>
      {isInitialLoad && (
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={portfolioTitleStyles.title}
        >
          Kuji&#39;s Portfolio
        </motion.h1>
      )}
    </AnimatePresence>
  );
}
