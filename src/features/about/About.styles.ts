import { cn } from "@/utils/cn";

/**
 * About機能専用のスタイル定義
 */
export const aboutStyles = {
  // プロフィールカード
  profileCard: cn(
    "rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-100 p-8 shadow-xl",
    "dark:border-teal-600 dark:from-teal-900/30 dark:to-emerald-800/30 dark:text-slate-100"
  ),
  profileIcon:
    "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-2xl font-bold text-white",

  // スキルカード
  skillsCard: cn(
    "rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-100 p-6 shadow-xl",
    "dark:border-teal-600 dark:from-teal-900/30 dark:to-emerald-800/30 dark:text-teal-100"
  ),
  skillBadge: cn(
    "flex items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2",
    "dark:border-teal-800 dark:bg-teal-900/20"
  ),

  // キャリアカード
  careerCard: cn(
    "rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-100 p-8 shadow-xl",
    "dark:border-teal-600 dark:from-teal-900/30 dark:to-emerald-800/30 dark:text-teal-100"
  ),
  timelineLine:
    "absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-teal-500 to-emerald-500",
  timelineDot:
    "absolute left-2 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-r from-teal-500 to-emerald-500 dark:border-gray-800",
  careerBox: cn(
    "rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-6",
    "dark:border-teal-800 dark:from-teal-900/20 dark:to-emerald-900/20"
  ),
  careerYear: "mb-2 text-xl font-bold text-teal-600 dark:text-teal-400",

  // サブカード（活動・資格・趣味）
  subCard: cn(
    "rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-100 p-6",
    "dark:border-teal-600 dark:from-teal-900/30 dark:to-emerald-800/30"
  ),
  subCardTitle:
    "mb-4 flex items-center text-lg font-bold text-teal-800 dark:text-teal-300",
} as const;
