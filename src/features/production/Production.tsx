"use client";

import Image from "next/image";
import Link from "next/link";
import { getIconSize } from "@/styles/design.styles";
import { cn } from "@/utils/cn.utils";
import { ProductionModal } from "./components";
import { TOP_PRIORITY_IMAGE_COUNT } from "./Production.constants";
import { productionStyles } from "./Production.styles";
import { hasModal } from "./Production.utils";
import { useProduction } from "./useProduction";

export default function Production() {
  const { items, selectedItem, isOpen, openModal, closeModal } =
    useProduction();

  return (
    <section>
      <div className="mb-12 text-center">
        <h2 className="heading-2 mb-4">Production</h2>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-200">
          制作物
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-6 md:grid-cols-1">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={cn(productionStyles.productionCard, "card-hover")}
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
                <div className="relative md:col-span-5">
                  <Image
                    src={item.thumbnailUrl || item.modal?.images?.[0] || ""}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="rounded-l-xl object-cover md:rounded-l-xl md:rounded-r-none"
                    priority={index < TOP_PRIORITY_IMAGE_COUNT}
                  />
                </div>
                {/* 右：本文 */}
                <div className="relative flex flex-col justify-between rounded-r-xl p-5 md:col-span-7">
                  <div>
                    <div className="mb-2 flex justify-end">
                      <span className={productionStyles.dateBadge}>
                        {item.publishedAt}
                      </span>
                    </div>
                    <h3 className={productionStyles.title}>{item.title}</h3>
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
                        className={productionStyles.iconButton}
                      >
                        <Image
                          src="/icon/icon_github.svg"
                          alt="GitHub"
                          width={20}
                          height={20}
                          className={getIconSize("lg")}
                          priority={false}
                        />
                      </a>
                    )}
                    {/* 他サイトアイコン */}
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
                            className={productionStyles.iconButton}
                          >
                            <Image
                              src={site.siteIconPath}
                              alt={site.siteTtl}
                              width={20}
                              height={20}
                              className={getIconSize("lg")}
                              priority={false}
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
                      className="btn-primary ml-auto"
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
              <Image
                src={
                  selectedItem.modal?.images?.[0] ||
                  selectedItem.thumbnailUrl ||
                  ""
                }
                alt={selectedItem.title}
                width={1200}
                height={800}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-xl border border-gray-200/70 shadow-sm dark:border-neutral-800/70"
                priority={false}
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
                      <span key={tag} className={productionStyles.tagBadge}>
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
                          className={`mr-2 ${getIconSize("md")} flex-shrink-0 text-green-500`}
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
        />
      )}
    </section>
  );
}
