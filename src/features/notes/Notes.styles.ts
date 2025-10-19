import { cn } from "@/utils/cn.utils";

/**
 * Notes機能専用のスタイル定義
 */
export const notesStyles = {
  // 記事カード
  articleCard: cn(
    "group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300",
    "dark:border-gray-700 dark:bg-gray-800"
  ),

  // Qiitaアイコン背景
  qiitaIconBg:
    "flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30",

  // サイトバッジ
  siteBadge:
    "rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",

  // いいねバッジ
  likesBadge:
    "inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300",

  // ローディングスピナー
  spinner:
    "h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-teal-500 dark:border-gray-600 dark:border-t-teal-400",
} as const;
