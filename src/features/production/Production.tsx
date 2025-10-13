"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { ProductionModal } from "./components";
import { hasModal } from "./Production.utils";
import { useProduction } from "./useProduction";

export default function Production() {
  const { items, selectedItem, isOpen, openModal, closeModal } =
    useProduction();

  return (
    <section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl dark:text-gray-100">
          Production
        </h2>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-200">
          制作物
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-6 md:grid-cols-1">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "group transform rounded-xl border border-emerald-900/10 bg-white/80 p-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
                "backdrop-blur-sm dark:border-emerald-300/10 dark:bg-neutral-900/70"
              )}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => hasModal(item) && openModal(item.id)}
                onKeyDown={(e) => {
                  if (!hasModal(item)) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(item.id);
                  }
                }}
                className="grid cursor-pointer grid-cols-1 gap-0 md:grid-cols-12"
              >
                {/* 左：サムネイル */}
                <div className="md:col-span-5">
                  <img
                    src={item.thumbnailUrl || item.modal?.images?.[0] || ""}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full rounded-l-xl object-cover md:rounded-l-xl md:rounded-r-none"
                  />
                </div>
                {/* 右：本文 */}
                <div className="relative flex flex-col justify-between rounded-r-xl p-5 md:col-span-7">
                  <div>
                    <div className="mb-2 flex justify-end">
                      <span
                        className={cn(
                          "inline-flex h-7 items-center rounded-full bg-emerald-50 px-3 text-xs font-semibold text-emerald-700 shadow-sm",
                          "dark:border dark:border-emerald-800/30 dark:bg-emerald-900/20 dark:text-emerald-200"
                        )}
                      >
                        {item.publishedAt}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "mb-1 text-xl font-extrabold tracking-tight",
                        "text-emerald-800 md:text-2xl dark:text-emerald-300"
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-7",
                        "text-gray-700 dark:text-gray-200"
                      )}
                    >
                      {item.description}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <p
                        className={cn(
                          "mt-3 text-sm",
                          "text-gray-600 dark:text-gray-300"
                        )}
                      >
                        使用技術: {item.tags.join(", ")}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    {/* GitHub アイコン */}
                    {item.modal?.repoUrl && (
                      <a
                        href={item.modal.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub Repository"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.9 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.58-2.81 5.6-5.49 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z" />
                        </svg>
                      </a>
                    )}
                    {/* otherSite アイコン群 */}
                    {item.otherSite && item.otherSite.length > 0 && (
                      <div className="flex items-center gap-2">
                        {item.otherSite.map((site) => (
                          <a
                            key={site.siteUrl}
                            href={site.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title={site.siteTtl}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                          >
                            <img
                              src={site.siteIconPath}
                              alt={site.siteTtl}
                              loading="lazy"
                              className="h-5 w-5"
                            />
                          </a>
                        ))}
                      </div>
                    )}
                    {/* 外部リンクボタン */}
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "ml-auto inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none",
                        "dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-offset-0"
                      )}
                    >
                      アプリを見る
                      <span aria-hidden>»</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && selectedItem && (
        <ProductionModal
          isOpen={isOpen}
          onClose={closeModal}
          title={selectedItem.title}
          pages={selectedItem.modal?.pages}
          leftSlot={
            <div>
              <img
                src={
                  selectedItem.modal?.images?.[0] ||
                  selectedItem.thumbnailUrl ||
                  ""
                }
                alt={selectedItem.title}
                loading="lazy"
                className="w-full rounded-xl border border-gray-200/70 shadow-sm dark:border-neutral-800/70"
              />
            </div>
          }
          rightSlot={
            <div>
              {selectedItem.description && (
                <div>
                  <div
                    className={cn(
                      "mb-2 text-base font-bold",
                      "text-black dark:text-white"
                    )}
                  >
                    概要
                  </div>
                  <p
                    className={cn(
                      "text-sm leading-6",
                      "text-gray-700 dark:text-gray-200"
                    )}
                  >
                    {selectedItem.description}
                  </p>
                </div>
              )}
              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div className="mt-6">
                  <div
                    className={cn(
                      "mb-2 text-base font-bold",
                      "text-black dark:text-white"
                    )}
                  >
                    使用技術
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "rounded-full bg-green-100 px-4 py-1 text-xs font-semibold",
                          "text-green-800 dark:bg-green-900 dark:text-green-200"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {selectedItem.features && selectedItem.features.length > 0 && (
                <div className="mt-6">
                  <div
                    className={cn(
                      "mb-2 text-base font-bold",
                      "text-black dark:text-white"
                    )}
                  >
                    主な機能
                  </div>
                  <ul className="space-y-2">
                    {selectedItem.features.map((feat, i) => (
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
          }
          footerSlot={<></>}
        />
      )}
    </section>
  );
}
