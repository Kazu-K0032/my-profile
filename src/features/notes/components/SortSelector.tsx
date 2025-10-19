import type { SortOption } from "../Notes.types";

interface SortSelectorProps {
  sortOption: SortOption; // ソートオプション
  onSortChange: (option: SortOption) => void; // ソートオプション変更時のコールバック
}

/**
 * ソートセレクタ
 */
export default function SortSelector({
  sortOption,
  onSortChange,
}: SortSelectorProps) {
  const sortOptions = [
    { value: "created_at" as const, label: "投稿順" },
    { value: "likes_count" as const, label: "いいね順" },
  ];

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort-select"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        並び順:
      </label>
      <select
        id="sort-select"
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="btn-secondary cursor-pointer focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-teal-400"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
