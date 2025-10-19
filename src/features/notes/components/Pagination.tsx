import { getButtonSize, getIconSize } from "@/styles/design.styles";

interface PaginationProps {
  currentPage: number; // 現在のページ
  totalPages: number; // 総ページ数
  onPrevPage: () => void; // 前のページに移動する
  onNextPage: () => void; // 次のページに移動する
}

/**
 * ページネーション
 */
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
        className={`btn-secondary disabled:btn-disabled ${getButtonSize("md")}`}
      >
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
        className={`btn-secondary disabled:btn-disabled ${getButtonSize("md")}`}
      >
        次へ
        <svg
          className={`ml-2 ${getIconSize("md")}`}
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
