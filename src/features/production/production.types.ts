/**
 * プロダクションアイテム
 */
export interface ProductionItem {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  thumbnailUrl?: string;
  tags?: string[];
  modal?: ProductionModalContent;
  features?: string[];
}

/**
 * プロダクションモーダルコンテンツ
 */
export interface ProductionModalContent {
  longDescription?: string;
  images?: string[];
  demoUrl?: string;
  repoUrl?: string;
}
