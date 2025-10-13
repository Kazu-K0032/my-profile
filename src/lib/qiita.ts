import type { QiitaArticle } from "@/types/qiita.types";

const QIITA_ENDPOINT = "/api/qiita";

/**
 * Qiita APIから記事を取得する
 * @returns {Promise<QiitaArticle[]>} 投稿順でソートされたQiita記事の配列
 * @throws {Error} API呼び出しに失敗した場合
 */
export const fetchQiitaArticles = async () => {
  const res = await fetch(QIITA_ENDPOINT);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "記事の取得に失敗しました");
  }

  if (!Array.isArray(data)) {
    throw new Error("データの形式が不正です");
  }

  // 作成日時を昇順・投稿順でソート
  const sortedData = data.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return sortedData;
};

/**
 * セッションストレージからキャッシュされた記事を取得する
 * @returns {QiitaArticle[] | null} キャッシュされた記事の配列、キャッシュが無効または存在しない場合はnull
 */
export const getCachedArticles = () => {
  const cachedData = sessionStorage.getItem("qiitaArticles");
  if (!cachedData) return null;

  const { articles, timestamp } = JSON.parse(cachedData);
  const oneHour = 3600000;

  if (Date.now() - timestamp < oneHour) {
    return articles;
  }

  return null;
};

/**
 * 記事をセッションストレージにキャッシュする
 * @param {QiitaArticle[]} articles - キャッシュする記事の配列
 * @returns {void}
 */
export const cacheArticles = (articles: QiitaArticle[]) => {
  sessionStorage.setItem(
    "qiitaArticles",
    JSON.stringify({
      articles,
      timestamp: Date.now(),
    })
  );
};
