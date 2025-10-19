"use client";

import { getIconSize, getSpacingSize } from "@/styles/design.styles";
import { Pagination, Article, SortSelector } from "./components";
import { notesStyles } from "./Notes.styles";
import { useNotes } from "./useNotes";

export default function Notes() {
  const {
    articles,
    isLoading,
    loadingText,
    error,
    currentPage,
    currentArticles,
    totalPages,
    sortOption,
    setSortOption,
    handlePrevPage,
    handleNextPage,
    fetchQiitaData,
  } = useNotes();

  return (
    <div className="mx-auto max-w-6xl">
      {/* ヘッダーセクション */}
      <div className="mb-12 text-center">
        <h2 className="heading-2 mb-4">Notes</h2>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-200">
          技術記事一覧
        </p>
      </div>

      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/30 backdrop-blur-sm dark:bg-gray-900/50">
          <div className="flex items-center gap-4">
            <div className={notesStyles.spinner}></div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Loading{loadingText}
            </p>
          </div>
        </div>
      ) : error ? (
        <div className="py-20 text-center">
          <div className="mx-auto max-w-md rounded-lg bg-rose-50 p-6 shadow-sm dark:border dark:border-rose-800/20 dark:bg-rose-900/10">
            <div className="mb-4 text-rose-500 dark:text-rose-400">
              <svg
                className={`mx-auto ${getIconSize("xl")}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-rose-700 dark:text-rose-300">
              エラーが発生しました
            </h3>
            <p className="mb-4 text-rose-600 dark:text-rose-400">{error}</p>
            <button
              onClick={() => {
                fetchQiitaData();
              }}
              className="rounded-lg bg-rose-500 px-6 py-2 text-white transition-colors hover:bg-rose-600 focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:outline-none dark:bg-rose-600 dark:hover:bg-rose-700"
            >
              再試行
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* ソートセレクタ */}
          <div className="mb-6 flex justify-end">
            <SortSelector
              sortOption={sortOption}
              onSortChange={setSortOption}
            />
          </div>

          {/* 投稿数表示 */}
          <div className="mb-6 flex justify-center">
            <span className="badge-primary">
              <svg
                className={`mr-2 ${getIconSize("md")}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              投稿数: {articles.length}件
            </span>
          </div>

          <div
            className={`grid ${getSpacingSize("lg")} md:grid-cols-2 lg:grid-cols-1`}
          >
            {currentArticles.map((article) => (
              <div
                key={article.id}
                className="group h-full transform transition-transform duration-200 hover:translate-y-1"
              >
                {/* 記事カード */}
                <Article {...article} site="Qiita" />
              </div>
            ))}
          </div>
          {currentArticles.length > 0 && (
            <div className="mt-12">
              {/* ページネーション */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
