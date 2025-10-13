interface PaginationProps {
  currentPage: number; // 現在のページ
  totalPages: number; // 総ページ数
  onPrevPage: () => void; // 前のページに移動する
  onNextPage: () => void; // 次のページに移動する
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="inline-flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:disabled:hover:bg-gray-800"
      >
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        前へ
      </button>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentPage}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">/</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {totalPages}
        </span>
      </div>

      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="inline-flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:disabled:hover:bg-gray-800"
      >
        次へ
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
