'use client';

import { motion } from 'framer-motion';
import { useInitialLoad } from './hooks/useInitialLoad';
import { MainTtlType } from './Header.types';
import { headerStyles } from './header.styles';
import Navigation from './components/Navigation';
import PortfolioTitle from './components/PortfolioTitle';

interface HeaderProps {
  onNavClick: (page: MainTtlType) => void;
  currentPage: MainTtlType;
}

/**
 * ヘッダーコンポーネント
 * ナビゲーション（テーマ切り替え含む）、ポートフォリオタイトルを含む
 */
export default function Header({ onNavClick, currentPage }: HeaderProps) {
  const { isInitialLoad } = useInitialLoad();

  return (
    <div className={headerStyles.container}>
      <motion.header
        className={headerStyles.header}
        initial={false}
        animate={isInitialLoad ? { height: '120px' } : { height: '60px' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
