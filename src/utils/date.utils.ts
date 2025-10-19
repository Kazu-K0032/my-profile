import { DateTime } from "luxon";

/**
 * 日時文字列をJST形式でフォーマットする
 * @param {string} dateString - ISO形式の日時文字列
 * @returns {string} JST形式の日付文字列
 * @example
 * formatDate("2025-01-01T00:00:00+09:00") // "2025/01/01"
 */
export const formatDate = (dateString: string): string => {
  const date = DateTime.fromISO(dateString).setZone("Asia/Tokyo");

  if (!date.isValid) {
    return "無効な日付";
  }

  return date.toFormat("yyyy/MM/dd");
};
