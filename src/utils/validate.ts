/**
 * 検証ユーティリティ関数
 */

/**
 * URLの形式検証
 * @param url 検証するURL
 * @returns 有効なURLかどうか
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
