"use client";

import { useState } from "react";
import { NAVIGATION_TABS } from "@/constants/globals.constants";
import { About } from "@/features/about";
import { Header } from "@/features/header";
import { Notes } from "@/features/notes";
import { Production } from "@/features/production";
import type { NavigationTabKey } from "@/types/globals.types";
import { cn } from "@/utils/cn";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<NavigationTabKey>("About");
  const handleNavClick = (page: NavigationTabKey) => {
    setCurrentPage(page);
  };

  // 現在のタブ情報を取得
  const currentTab = NAVIGATION_TABS.find((tab) => tab.key === currentPage);

  return (
    <div suppressHydrationWarning={true} className="c-bg-primary min-h-screen">
      <Header onNavClick={handleNavClick} currentPage={currentPage} />

      {/* メインコンテンツエリア */}
      <main className="px-8 pt-8 pb-16">
        <div className="mx-auto max-w-4xl">
          {currentPage === "About" ? (
            <About />
          ) : currentPage === "Notes" ? (
            <Notes />
          ) : currentPage === "Production" ? (
            <Production />
          ) : (
            <>
              <h1
                className={cn(
                  "mb-4 text-4xl font-bold",
                  "text-black dark:text-white"
                )}
              >
                {currentTab?.title || currentPage}
              </h1>
              <p className={cn("text-lg", "text-gray-600 dark:text-white")}>
                {currentTab?.subtitle || ""}
              </p>
              {currentTab?.description && (
                <p
                  className={cn(
                    "mt-2 text-sm",
                    "text-gray-500 dark:text-gray-100"
                  )}
                >
                  {currentTab.description}
                </p>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
