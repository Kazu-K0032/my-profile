import { cn } from "@/utils/cn.utils";

/**
 * Production機能専用のスタイル定義
 */
export const productionStyles = {
  // 制作物カード
  productionCard: cn(
    "group transform rounded-xl border border-teal-900/10 bg-white/80 p-0 shadow-lg transition-all duration-200",
    "dark:border-teal-300/10 dark:bg-neutral-900/70"
  ),

  // 日付バッジ
  dateBadge: cn(
    "inline-flex h-7 items-center rounded-full bg-teal-50 px-3 text-xs font-semibold text-teal-700 shadow-sm",
    "dark:border dark:border-teal-800/30 dark:bg-teal-900/20 dark:text-teal-200"
  ),

  // タイトル
  title: cn(
    "mb-1 text-xl font-extrabold tracking-tight",
    "text-teal-800 md:text-2xl dark:text-teal-300"
  ),

  // タグバッジ
  tagBadge: cn(
    "rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold",
    "text-teal-800 dark:bg-teal-900 dark:text-teal-200"
  ),

  // アイコンボタン
  iconButton:
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
} as const;
