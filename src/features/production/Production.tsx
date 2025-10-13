"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { formatDate } from "@/utils/date";
import { ProductionModal } from "./components";
import { hasModal } from "./Production.utils";
import { useProduction } from "./useProduction";

export default function Production() {
  const { items, selectedItem, isOpen, openModal, closeModal } =
    useProduction();

  return (
    <section>
      <h1
        className={cn("mb-4 text-4xl font-bold", "text-black dark:text-white")}
      >
        Production
      </h1>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.id} className="rounded-lg border p-4">
            <div
              className={cn(
                "text-lg font-semibold",
                "text-black dark:text-white"
              )}
            >
              {item.title}
            </div>
            <p
              className={cn("mt-1 text-sm", "text-gray-600 dark:text-gray-200")}
            >
              {item.description}
            </p>
            <p
              className={cn("mt-1 text-xs", "text-gray-500 dark:text-gray-300")}
            >
              {formatDate(item.publishedAt)}
            </p>
            <div className="mt-3 flex items-center gap-4">
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("text-blue-600 underline", "dark:text-blue-400")}
              >
                View Project
              </Link>
              {hasModal(item) && (
                <button
                  type="button"
                  onClick={() => openModal(item.id)}
                  className={cn(
                    "rounded bg-gray-100 px-3 py-1 text-sm",
                    "text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  )}
                >
                  Details
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {isOpen && selectedItem && (
        <ProductionModal
          isOpen={isOpen}
          onClose={closeModal}
          title={selectedItem.title}
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
                className="w-full rounded border"
              />
            </div>
          }
          rightSlot={
            <div>
              {selectedItem.description && (
                <p
                  className={cn(
                    "text-sm leading-6",
                    "text-gray-700 dark:text-gray-200"
                  )}
                >
                  {selectedItem.description}
                </p>
              )}
              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold",
                        "text-green-800 dark:bg-green-900 dark:text-green-100"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
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
                        className={cn(
                          "text-sm",
                          "text-gray-700 dark:text-gray-200"
                        )}
                      >
                        ・{feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          }
          footerSlot={
            <div className="flex flex-wrap items-center gap-4">
              {selectedItem.modal?.demoUrl && (
                <Link
                  href={selectedItem.modal.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-blue-600 underline",
                    "dark:text-blue-400"
                  )}
                >
                  Live Demo
                </Link>
              )}
              {selectedItem.modal?.repoUrl && (
                <Link
                  href={selectedItem.modal.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-blue-600 underline",
                    "dark:text-blue-400"
                  )}
                >
                  Repository
                </Link>
              )}
            </div>
          }
        />
      )}
    </section>
  );
}
