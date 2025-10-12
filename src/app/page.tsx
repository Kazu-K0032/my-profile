'use client';

import { Header, MainTtlType } from '@/features/header';
import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<MainTtlType>('About');
  const handleNavClick = (page: MainTtlType) => {
    setCurrentPage(page);
  };

  return (
    <div suppressHydrationWarning={true} className="c-bg-primary min-h-screen">
      <Header onNavClick={handleNavClick} currentPage={currentPage} />

      {/* メインコンテンツエリア */}
      <main className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">{currentPage}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {currentPage === 'About' && '私について'}
            {currentPage === 'Production' && '制作物'}
            {currentPage === 'Notes' && '記事一覧'}
          </p>
        </div>
      </main>
    </div>
  );
}
