import { cn } from "@/utils/cn";

/**
 * ヘッダー関連のスタイルクラス
 */
export const headerStyles = {
  container: "relative",
  header: cn(
    "w-full c-bg-header transition-colors duration-300",
    "text-black dark:text-white"
  ),
  content: "relative flex h-full items-center justify-center",
  section: "flex flex-col items-center",
} as const;

/**
 * テーマトグルボタンのスタイル
 */
export const themeToggleStyles = {
  base: "fixed right-4 top-2 z-50 flex select-none items-center gap-2 rounded-full px-4 py-2 font-medium backdrop-blur-md transition-all duration-300 w-12 justify-center cursor-pointer",
  dark: "bg-gray-800/70 text-gray-200 shadow-lg shadow-gray-800/50 hover:bg-gray-700/70 border border-teal-300/50",
  light:
    "bg-white/70 text-gray-800 shadow-lg shadow-gray-300/50 hover:bg-gray-50/70",
  placeholder:
    "invisible fixed right-4 top-2 z-50 flex items-center gap-2 rounded-full px-4 py-2 font-medium w-24 justify-center",
} as const;

/**
 * ナビゲーションのスタイル
 */
export const navigationStyles = {
  nav: "flex items-center justify-center",
  list: "flex list-none gap-x-5 text-center text-2xl",
  button: {
    base: "relative select-none px-3 py-1 transition-all duration-200 cursor-pointer min-h-[2.5rem] flex items-center justify-center font-medium",
    active: cn(
      "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-dotted after:border-teal-600",
      "dark:text-white dark:after:border-teal-400"
    ),
    inactive: cn(
      "text-gray-600 hover:text-black",
      "dark:text-gray-200 dark:hover:text-white"
    ),
  },
} as const;

/**
 * ポートフォリオタイトルのスタイル
 */
export const portfolioTitleStyles = {
  title: cn(
    "c-bg-header absolute top-2 flex max-w-full select-none items-center justify-center break-words px-4 py-2 text-center text-3xl font-bold md:px-0 md:text-4xl",
    "text-black dark:text-white"
  ),
} as const;

/**
 * テーマトグルボタンのスタイル
 * @param isDark テーマがダークかどうか
 * @returns テーマトグルボタンのスタイル
 */
export const getThemeToggleClasses = (isDark: boolean) => {
  return cn(
    themeToggleStyles.base,
    isDark ? themeToggleStyles.dark : themeToggleStyles.light
  );
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
