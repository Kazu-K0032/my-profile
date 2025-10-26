"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import { NAVIGATION_TABS } from "@/constants/globals.constants";
import { About } from "@/features/about";
import { Header } from "@/features/header";
import { Notes } from "@/features/notes";
import { Production } from "@/features/production";
import type { NavigationTabKey } from "@/types/globals.types";
import { cn } from "@/utils/cn.utils";

interface HomeClientProps {
  initialTab: NavigationTabKey;
}

export default function HomeClient({ initialTab }: HomeClientProps) {
  // 現在のタブ
  const [currentPage, setCurrentPage] = useState<NavigationTabKey>(initialTab);
  // 初期化状態
  const [isInitialized, setIsInitialized] = useState(false);
  // ルーター
  const router = useRouter();
  // 検索パラメータ
  const searchParams = useSearchParams();

  /**
   * ナビゲーションクリックハンドラー
   * URLパラメータを更新
   */
  const handleNavClick = useCallback(
    (page: NavigationTabKey) => {
      setCurrentPage(page);

      // URLパラメータを更新
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", page);
      router.push(`/?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  /**
   * コンポーネントマウント時の初期化処理
   * URLパラメータのみを使用
   */
  useEffect(() => {
    const urlTab = searchParams.get("tab") as NavigationTabKey;

    if (urlTab && NAVIGATION_TABS.some((tab) => tab.key === urlTab)) {
      // URLパラメータが有効な場合はそれを使用
      setCurrentPage(urlTab);
    } else {
      // URLパラメータがない場合はデフォルトタブを使用
      setCurrentPage(initialTab);
    }

    setIsInitialized(true);
  }, [searchParams, initialTab]);

  // 現在のタブ情報を取得
  const currentTab = useMemo(() => {
    return NAVIGATION_TABS.find((tab) => tab.key === currentPage);
  }, [currentPage]);

  // 初期化が完了するまでローディング表示
  if (!isInitialized) {
    return (
      <div
        suppressHydrationWarning={true}
        className="c-bg-primary min-h-screen"
      >
        <main className="px-8 pt-8 pb-16">
          <div className="mx-auto max-w-4xl">
            <Loading />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="c-bg-primary min-h-screen">
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
