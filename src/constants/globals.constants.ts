import { Inter } from "next/font/google";
import type { NavigationTab, ThemeMode } from "@/types/globals.types";

export const SITE_TITLE = "Kuji's Portfolio";
export const SITE_DESCRIPTION = "Kuji's Portfolio";
export const SITE_FAVICON = "/favicon.ico";

export const INTER_FONT = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// ダークモード/ライトモード
export const THEME_MODES: Record<Uppercase<ThemeMode>, ThemeMode> = {
  DARK: "dark",
  LIGHT: "light",
};

/**
 * ナビゲーションタブの設定
 */
export const NAVIGATION_TABS: NavigationTab[] = [
  {
    key: "About",
    title: "About",
    subtitle: "私について",
    description: "自己紹介や経歴について",
  },
  {
    key: "Production",
    title: "Production",
    subtitle: "制作物",
    description: "開発したプロジェクトや作品",
  },
  {
    key: "Notes",
    title: "Notes",
    subtitle: "記事一覧",
    description: "技術記事やブログ記事",
  },
];

/**
 * ローカルストレージ
 */
export const STORAGE_KEY = "qiitaArticles";
