import type { SortOption } from "../Notes.types";

interface SortSelectorProps {
  sortOption: SortOption; // ソートオプション
  onSortChange: (option: SortOption) => void; // ソートオプション変更時のコールバック
}

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
        className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-blue-400"
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
