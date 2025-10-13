/**
 * Qiita APIのレスポンス
 * 記事1つの型
 * @see https://qiita.com/api/v2/docs#%E6%8A%95%E7%A8%BF
 */
export interface QiitaArticle {
  id: string;
  created_at: string;
  url: string;
  title: string;
  likes_count?: number;
}
