'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { THEME_MODES } from '@/constants/globals.constants';
import { navList } from '../Header.constants';
import type { MainTtlType } from '../Header.types';
import {
  getNavigationButtonClasses,
  navigationStyles,
  getThemeToggleClasses,
} from '../header.styles';

interface NavigationProps {
  onNavClick: (page: MainTtlType) => void;
  currentPage: MainTtlType;
  isInitialLoad: boolean;
}

/**
 * ナビゲーションコンポーネント
 */
export default function Navigation({ onNavClick, currentPage, isInitialLoad }: NavigationProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * ナビゲーションクリック時の処理
   * @param navName ナビゲーション名
   */
  const handleNav = (navName: MainTtlType) => {
    onNavClick(navName);
  };

  const switchLightDark = () => {
    setTheme(theme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK);
  };

  const isDark = resolvedTheme === THEME_MODES.DARK;

  return (
    <motion.nav
      className={navigationStyles.nav}
      initial={{ y: 30 }}
      animate={{
        y: isInitialLoad ? 30 : 0,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <ul className={navigationStyles.list}>
        {/* テーマ切り替えボタン */}
        <li>
          <button
            onClick={switchLightDark}
            className={getThemeToggleClasses(isDark)}
            disabled={!mounted}
          >
            <span className="text-lg">{isDark ? '🌙' : '☀️'}</span>
            <span className="text-sm">{isDark ? 'Dark' : 'Light'}</span>
          </button>
        </li>

        {/* ナビゲーション項目 */}
        {navList.map((navName) => (
          <li key={navName}>
            <button
              onClick={() => handleNav(navName)}
              className={getNavigationButtonClasses(currentPage === navName)}
            >
              {navName}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
