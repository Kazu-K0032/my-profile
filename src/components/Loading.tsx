"use client";

import { cn } from "@/utils/cn.utils";

interface LoadingProps {
  className?: string;
}

/**
 * ローディングコンポーネント
 */
export default function Loading({ className }: LoadingProps) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] items-center justify-center",
        className
      )}
    >
      <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900 dark:border-white"></div>
    </div>
  );
}
