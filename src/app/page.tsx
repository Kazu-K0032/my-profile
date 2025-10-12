'use client';

import { useState } from 'react';
import { Header } from '@/features/header';
import { NAVIGATION_TABS } from '@/constants/globals.constants';
import type { NavigationTabKey } from '@/types/globals.types';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<NavigationTabKey>('About');
  const handleNavClick = (page: NavigationTabKey) => {
    setCurrentPage(page);
  };

  // 現在のタブ情報を取得
  const currentTab = NAVIGATION_TABS.find((tab) => tab.key === currentPage);

  return (
    <div suppressHydrationWarning={true} className="c-bg-primary min-h-screen">
      <Header onNavClick={handleNavClick} currentPage={currentPage} />

      {/* メインコンテンツエリア */}
      <main className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">
            {currentTab?.title || currentPage}
          </h1>
          <p className="text-lg text-gray-600 dark:text-white">{currentTab?.subtitle || ''}</p>
          {currentTab?.description && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-100">
              {currentTab.description}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
