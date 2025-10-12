import { cn } from '@/utils/cn';

/**
 * ヘッダー関連のスタイルクラス
 */
export const headerStyles = {
  container: 'relative',
  header:
    'w-full c-bg-header text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white',
  content: 'relative flex h-full items-center justify-center',
  section: 'flex flex-col items-center w-full',
} as const;

/**
 * テーマトグルボタンのスタイル（ナビゲーション内）
 */
export const themeToggleStyles = {
  base: 'relative select-none px-2 py-1 transition-all duration-200 text-left flex items-center gap-2',
  dark: 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-100',
  light: 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-100',
  placeholder: 'invisible',
} as const;

/**
 * ナビゲーションのスタイル
 */
export const navigationStyles = {
  nav: 'flex flex-col justify-center items-center bg-red-500 w-full h-full border-2 border-blue-500',
  list: 'flex flex-col list-none gap-y-2 text-left text-lg justify-center items-center bg-green-500 p-4',
  button: {
    base: 'relative select-none px-2 py-1 transition-all duration-200 text-left',
    active: 'font-bold text-black dark:text-gray-100',
    inactive: 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-100',
  },
} as const;

/**
 * ポートフォリオタイトルのスタイル
 */
export const portfolioTitleStyles = {
  title:
    'absolute top-2 flex max-w-full select-none items-center justify-center break-words px-4 py-2 text-center text-3xl font-bold md:px-0 md:text-4xl text-black dark:text-white',
} as const;

/**
 * テーマトグルボタンのスタイル
 * @param isDark テーマがダークかどうか
 * @returns テーマトグルボタンのスタイル
 */
export const getThemeToggleClasses = (isDark: boolean) => {
  return cn(themeToggleStyles.base, isDark ? themeToggleStyles.dark : themeToggleStyles.light);
};

/**
 * ナビゲーションボタンのスタイル
 * @param isActive ナビゲーションボタンがアクティブかどうか
 * @returns ナビゲーションボタンのスタイル
 */
export const getNavigationButtonClasses = (isActive: boolean) => {
  return cn(
    navigationStyles.button.base,
    isActive ? navigationStyles.button.active : navigationStyles.button.inactive
  );
};
