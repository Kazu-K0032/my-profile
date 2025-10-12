/**
 * ナビゲーションタブの定義
 */
export interface NavigationTab {
  key: string;
  title: string;
  subtitle: string;
  description?: string;
}

/**
 * ナビゲーションタブのキー型
 */
export type NavigationTabKey = NavigationTab['key'];

/**
 * テーマモードの型
 */
export type ThemeMode = 'dark' | 'light';
