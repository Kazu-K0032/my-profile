/**
 * メインタイトルタイプ
 */
export type MainTtlType = 'About' | 'Production' | 'Notes';

/**
 * サブタイトルタイプ
 */
export type SubTtlType = '私について' | '制作物' | '記事一覧';

/**
 * ヘッダープロパティ
 */
export interface HeaderProps {
  onNavClick: (page: MainTtlType) => void;
  currentPage: MainTtlType;
}

/**
 * ナビゲーションプロパティ
 */
export interface NavigationProps {
  onNavClick: (page: MainTtlType) => void;
  currentPage: MainTtlType;
  isInitialLoad: boolean;
}

/**
 * ポートフォリオタイトルプロパティ
 */
export interface PortfolioTitleProps {
  isInitialLoad: boolean;
}
