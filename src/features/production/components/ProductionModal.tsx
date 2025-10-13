"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

interface ProductionModalProps {
  isOpen: boolean; // モーダルが開いているかどうか
  onClose: () => void; // モーダルを閉じる
  title?: string; // モーダルのタイトル
  leftSlot?: React.ReactNode; // モーダルの左側のコンテンツ
  rightSlot?: React.ReactNode; // モーダルの右側のコンテンツ
  footerSlot?: React.ReactNode; // 互換用
  pages?: Array<
    | {
        type: "overview";
        title?: string;
        description?: string;
        technologies?: string[];
        features?: string[];
      }
    | { type: "markdown"; title: string; content: string | string[] }
  >;
}

function renderMarkdownLikeContent(content?: string | string[]) {
  if (!content) return null;
  const lines = Array.isArray(content) ? content : content.split("\n");
  const elements: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flush = () => {
    if (paragraph.length) {
      elements.push(
        <p
          key={`p-${elements.length}`}
          className="text-sm leading-7 text-gray-700 dark:text-gray-200"
        >
          {renderInline(paragraph.join("\n"))}
        </p>
      );
      paragraph = [];
    }
    if (listItems.length) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="ml-5 list-disc space-y-1 text-sm text-gray-700 dark:text-gray-200"
        >
          {listItems.map((t, i) => (
            <li key={`li-${i}`}>{renderInline(t)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((raw) => {
    const line = raw.replace(/\s+$/, "");
    if (line.trim() === "") {
      flush();
      return;
    }
    // bullet list: - text or * text
    const li = line.match(/^\s*[-*]\s+(.+)/);
    if (li) {
      // starting or continuing list
      if (paragraph.length) flush();
      listItems.push(li[1]);
      return;
    } else {
      // if list was open and a non-list line appears, flush list
      if (listItems.length) flush();
    }
    const h2 = line.match(/^##\s+(.+)/);
    if (h2) {
      flush();
      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="mt-6 mb-2 text-lg font-bold text-black dark:text-white"
        >
          {h2[1]}
        </h2>
      );
      return;
    }
    const h3 = line.match(/^###\s+(.+)/);
    if (h3) {
      flush();
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="mt-4 mb-2 text-base font-semibold text-black dark:text-white"
        >
          {h3[1]}
        </h3>
      );
      return;
    }
    const h4 = line.match(/^####\s+(.+)/);
    if (h4) {
      flush();
      elements.push(
        <h4
          key={`h4-${elements.length}`}
          className="mt-3 mb-1 text-sm font-semibold text-black dark:text-white"
        >
          {h4[1]}
        </h4>
      );
      return;
    }
    paragraph.push(line);
  });

  flush();
  return <div className="space-y-3">{elements}</div>;
}

// inline: convert [text](url) to <a>
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > lastIndex) {
      parts.push(text.slice(lastIndex, m.index));
    }
    parts.push(
      <a
        key={`a-${parts.length}`}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {m[1]}
      </a>
    );
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export default function ProductionModal({
  isOpen,
  onClose,
  title,
  leftSlot,
  rightSlot,
  footerSlot: _footerSlot,
  pages = [],
}: ProductionModalProps) {
  const [visible, setVisible] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => setVisible(true), 0);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
      setVisible(false);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    // 開閉アニメーション用にフェードアウトしてから親へ通知
    setVisible(false);
    window.setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/50 backdrop-blur-sm",
        "transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0"
      )}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Modal dialog"}
      onClick={handleClose}
    >
      <div
        className={cn(
          "mx-4 w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl",
          "dark:bg-neutral-900",
          "transition-all duration-300 ease-out",
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0",
          "h-[80vh] max-h-[80vh]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-8 py-6">
          <h2
            className={cn(
              "text-2xl leading-tight font-extrabold md:text-3xl",
              "text-black dark:text-white"
            )}
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className={cn(
              "rounded-full p-2 text-sm",
              "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            )}
          >
            ×
          </button>
        </div>
        <div className="grid h-[calc(80vh-88px)] gap-8 px-8 pb-6 md:grid-cols-2">
          <div className="flex h-full items-center justify-center">
            {leftSlot}
          </div>
          <div className="relative md:border-l md:border-gray-200 md:pl-8 dark:md:border-neutral-800">
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto pr-2">
                {pageIndex === 0 || pages.length === 0
                  ? rightSlot
                  : (() => {
                      const current = pages[pageIndex - 1];
                      if (!current) return null;
                      if (current.type === "overview") {
                        return (
                          <div className="space-y-6">
                            {current.title && (
                              <div className="text-base font-bold text-black dark:text-white">
                                {current.title}
                              </div>
                            )}
                            {current.description && (
                              <p className="text-sm leading-7 text-gray-700 dark:text-gray-200">
                                {current.description}
                              </p>
                            )}
                            {current.technologies && (
                              <div>
                                <div className="mb-2 text-base font-bold text-black dark:text-white">
                                  使用技術
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {current.technologies.map((t) => (
                                    <span
                                      key={t}
                                      className="rounded-full bg-green-100 px-4 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            {current.features && (
                              <div>
                                <div className="mb-2 text-base font-bold text-black dark:text-white">
                                  主な機能
                                </div>
                                <ul className="space-y-2">
                                  {current.features.map((feat, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center text-sm leading-6 text-gray-700 dark:text-gray-200"
                                    >
                                      <svg
                                        className="mr-2 h-4 w-4 flex-shrink-0 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                      <span className="flex-1">{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      }
                      if (current.type === "markdown") {
                        return (
                          <div className="max-w-none space-y-4">
                            {current.title && (
                              <h2 className="text-lg font-bold text-black dark:text-white">
                                {current.title}
                              </h2>
                            )}
                            {renderMarkdownLikeContent(current.content)}
                          </div>
                        );
                      }
                      return null;
                    })()}
              </div>
              <div className="sticky bottom-0 z-10 py-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80">
                <div className="relative flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                    disabled={pageIndex === 0}
                    className={cn(
                      "w-max rounded-lg px-4 py-2 text-sm font-medium shadow-sm",
                      pageIndex === 0
                        ? "cursor-not-allowed bg-emerald-600/40 text-white/70"
                        : "cursor-pointer bg-emerald-600 text-white hover:bg-emerald-500",
                      "dark:bg-emerald-600 dark:hover:bg-emerald-500"
                    )}
                  >
                    前へ
                  </button>
                  <span className="pointer-events-none absolute left-1/2 flex max-w-[70%] -translate-x-1/2 items-center gap-1 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span className="truncate">
                      {pageIndex === 0
                        ? "概要"
                        : pages[pageIndex - 1]?.title ||
                          (pages[pageIndex - 1]?.type === "overview"
                            ? "概要"
                            : "")}
                    </span>
                    <span className="shrink-0">{`(${pageIndex + 1}/${pages.length + 1})`}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const total = pages.length + 1;
                      if (pageIndex >= total - 1) {
                        handleClose();
                      } else {
                        setPageIndex((p) => Math.min(total - 1, p + 1));
                      }
                    }}
                    className={cn(
                      "w-max rounded-lg px-4 py-2 text-sm font-medium shadow-sm",
                      pageIndex >= pages.length
                        ? "cursor-pointer bg-rose-600 text-white hover:bg-rose-500"
                        : "cursor-pointer bg-emerald-600 text-white hover:bg-emerald-500",
                      "dark:bg-emerald-600 dark:hover:bg-emerald-500"
                    )}
                  >
                    {pageIndex >= pages.length ? "閉じる" : "次へ"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
