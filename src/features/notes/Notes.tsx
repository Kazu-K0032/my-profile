"use client";

import { Pagination, Article } from "./components";
import { useNotes } from "./useNotes";

export default function Notes() {
  const {
    isLoading,
    loadingText,
    error,
    currentPage,
    currentArticles,
    totalPages,
    handlePrevPage,
    handleNextPage,
    fetchQiitaData,
  } = useNotes();

  return (
    <div className="flex flex-col">
      <h2 className="mb-8 text-center text-4xl tracking-wider md:text-5xl">
        <span className="font-serif font-bold tracking-wide">Notes</span>
        <span className="ml-4 font-sans text-2xl tracking-wide text-gray-500 dark:text-gray-200">
          記事一覧
        </span>
      </h2>

      {isLoading ? (
        <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black text-center text-2xl font-bold text-white">
          Loading{loadingText}
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            onClick={() => {
              fetchQiitaData();
            }}
            className="mt-4 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            再試行
          </button>
        </div>
      ) : (
        <>
          <ul className="flex max-w-xl flex-col gap-y-5">
            {currentArticles.map((article) => (
              <li key={article.id}>
                <Article {...article} site="Qiita" />
              </li>
            ))}
          </ul>
          {currentArticles.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
            />
          )}
        </>
      )}
    </div>
  );
}
