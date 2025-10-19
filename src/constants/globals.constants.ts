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
    href: "/?tab=about",
  },
  {
    key: "Production",
    title: "Production",
    subtitle: "制作物",
    description: "開発したプロジェクトや作品",
    href: "/?tab=production",
  },
  {
    key: "Notes",
    title: "Notes",
    subtitle: "記事一覧",
    description: "技術記事やブログ記事",
    href: "/?tab=notes",
  },
];

/**
 * ローカルストレージ
 */
export const STORAGE_KEY = "qiitaArticles";

/**
 * SEOメタデータの定義
 */
export const SEO_METADATA = {
  About: {
    title: "About | Kuji's Portfolio",
    description:
      "自己紹介や経歴について。スキル、資格、活動、趣味、キャリアについて詳しく紹介しています。",
    keywords: "ポートフォリオ,自己紹介,経歴,スキル,資格,活動,趣味,キャリア",
    ogTitle: "About | Kuji's Portfolio",
    ogDescription:
      "自己紹介や経歴について。スキル、資格、活動、趣味、キャリアについて詳しく紹介しています。",
    ogImage: "/og-image-about.jpg",
    canonical: "/?tab=about",
  },
  Production: {
    title: "Production | Kuji's Portfolio",
    description:
      "制作物一覧。開発したプロジェクトや作品を紹介しています。使用技術や機能、GitHubリポジトリも確認できます。",
    keywords: "制作物,プロジェクト,作品,開発,技術,GitHub,ポートフォリオ",
    ogTitle: "Production | Kuji's Portfolio",
    ogDescription:
      "制作物一覧。開発したプロジェクトや作品を紹介しています。使用技術や機能、GitHubリポジトリも確認できます。",
    ogImage: "/og-image-production.jpg",
    canonical: "/?tab=production",
  },
  Notes: {
    title: "Notes | Kuji's Portfolio",
    description:
      "技術記事一覧。Qiitaに投稿した技術記事やブログ記事を紹介しています。",
    keywords: "技術記事,ブログ,Qiita,技術,学習,開発",
    ogTitle: "Notes | Kuji's Portfolio",
    ogDescription:
      "技術記事一覧。Qiitaに投稿した技術記事やブログ記事を紹介しています。",
    ogImage: "/og-image-notes.jpg",
    canonical: "/?tab=notes",
  },
} as const;

/**
 * 構造化データ（JSON-LD）のテンプレート
 */
export const STRUCTURED_DATA = {
  Person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kuji",
    description: "フロントエンド・バックエンド開発者",
    url: "https://kuji-portfolio.com",
    sameAs: ["https://github.com/kuji", "https://qiita.com/kuji"],
  },
  WebSite: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kuji's Portfolio",
    description:
      "Kuji's Portfolio - フロントエンド・バックエンド開発者のポートフォリオサイト",
    url: "https://kuji-portfolio.com",
    author: {
      "@type": "Person",
      name: "Kuji",
    },
  },
} as const;
