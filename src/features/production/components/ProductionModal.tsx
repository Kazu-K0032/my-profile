"use client";

import { useEffect } from "react";
import { cn } from "@/utils/cn";

interface ProductionModalProps {
  isOpen: boolean; // モーダルが開いているかどうか
  onClose: () => void; // モーダルを閉じる
  title?: string; // モーダルのタイトル
  leftSlot?: React.ReactNode; // モーダルの左側のコンテンツ
  rightSlot?: React.ReactNode; // モーダルの右側のコンテンツ
  footerSlot?: React.ReactNode; // モーダルのフッターのコンテンツ
}

export default function ProductionModal({
  isOpen,
  onClose,
  title,
  leftSlot,
  rightSlot,
  footerSlot,
}: ProductionModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/50"
      )}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Modal dialog"}
      onClick={onClose}
    >
      <div
        className={cn(
          "mx-4 w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-2xl",
          "dark:bg-neutral-900",
          "transition-transform duration-300 ease-out",
          "translate-x-0",
          "max-h-[90vh]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 py-4">
          <h2 className={cn("text-xl font-bold", "text-black dark:text-white")}>
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={cn(
              "rounded p-2 text-sm",
              "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            )}
          >
            ×
          </button>
        </div>
        <div className="grid gap-6 px-6 pb-6 md:grid-cols-2">
          <div>{leftSlot}</div>
          <div>{rightSlot}</div>
        </div>
        {footerSlot && <div className="border-t px-6 py-4">{footerSlot}</div>}
      </div>
    </div>
  );
}
