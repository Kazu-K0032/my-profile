"use client";

import { useMemo } from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SITE_TITLE,
  SITE_FAVICON,
  NAVIGATION_TABS,
} from "@/constants/globals.constants";

/**
 * 404エラーページ
 * 存在しないページにアクセスした際に表示される
 */
export default function NotFound() {
  const navigationLinks = useMemo(() => {
    try {
      if (
        !NAVIGATION_TABS ||
        !Array.isArray(NAVIGATION_TABS) ||
        NAVIGATION_TABS.length === 0
      ) {
        console.warn("NAVIGATION_TABS is empty or undefined");
        return [];
      }

      const links: ReactElement[] = [];
      NAVIGATION_TABS.forEach((tab) => {
        // 各タブの必須プロパティを検証
        if (tab && tab.key && tab.href && tab.title) {
          links.push(
            <Link
              key={tab.key}
              href={tab.href}
              className="badge-primary transition-all duration-300 hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-900/30"
            >
              {tab.title}
            </Link>
          );
        } else {
          console.warn("Invalid navigation tab:", tab);
        }
      });
      return links;
    } catch (error) {
      console.error("Error generating navigation links:", error);
      return [];
    }
  }, []);

  return (
    <div className="not-found-container flex min-h-screen items-center justify-center">
      <div className="not-found-animate mx-auto max-w-2xl px-8 text-center">
        {/* 404エラーアイコン */}
        <div className="mb-8">
          <div className="not-found-icon-animate mx-auto flex h-32 w-32 items-center justify-center">
            <Image
              src={SITE_FAVICON}
              alt={`${SITE_TITLE} - 404 Error`}
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </div>
        </div>

        {/* エラーメッセージ */}
        <div className="mb-8">
          <h1 className="heading-1 mb-4">404</h1>
          <h2 className="heading-3 mb-4 text-slate-600 dark:text-slate-300">
            ページが見つかりません
          </h2>
        </div>

        {/* 利用可能なページへのリンク */}
        <div className="mt-12">
          <h3 className="heading-4 mb-4">利用可能なページ</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {navigationLinks}
          </div>
        </div>
      </div>
    </div>
  );
}
