/**
 * プロダクションアイテム
 */
export interface ProductionItem {
  id: string; // ID
  title: string; // タイトル
  description: string; // 説明
  url: string; // デプロイ先URL
  publishedAt: string; // 作成日・公開日
  thumbnailUrl?: string; // サムネイルURL
  tags?: string[]; // 技術タグ
  features?: string[]; // 特徴
  otherSite?: Array<{
    siteTtl: string; // サイト名
    siteIconPath: string; // サイトアイコンURL
    siteUrl: string; // サイトURL
  }>;
  modal?: ProductionModalContent; // モーダルコンテンツ
}

/**
 * プロダクションモーダルコンテンツ
 */
export interface ProductionModalContent {
  longDescription?: string; // 長文説明
  images?: string[];
  demoUrl?: string;
  repoUrl?: string;
  pages?: ProductionModalPage[];
}

export type ProductionModalPage =
  | {
      type: "overview";
      title?: string;
      description?: string;
      technologies?: string[];
      features?: string[];
    }
  | { type: "markdown"; title: string; content: string | string[] };
