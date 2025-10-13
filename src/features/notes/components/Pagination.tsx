interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}: PaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="rounded border px-4 py-2 disabled:opacity-50"
      >
        前へ
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="rounded border px-4 py-2 disabled:opacity-50"
      >
        次へ
      </button>
    </div>
  );
}
