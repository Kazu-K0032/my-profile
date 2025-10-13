import { useEffect, useState, useCallback } from "react";
import {
  fetchQiitaArticles,
  getCachedArticles,
  cacheArticles,
} from "@/lib/qiita";
import type { QiitaArticle } from "@/types/qiita.types";

export const useNotes = () => {
  // Qiita記事
  const [articles, setArticles] = useState<QiitaArticle[]>([]);
  // ロード状態
  const [isLoading, setIsLoading] = useState(false);
  // ロードテキスト
  const [loadingText, setLoadingText] = useState(".");
  // 現在のページ
  const [currentPage, setCurrentPage] = useState(1);
  // エラー
  const [error, setError] = useState<string | null>(null);

  /**
   * Qiita記事を取得する
   */
  const fetchQiitaData = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchQiitaArticles();
      setArticles(data);
      cacheArticles(data);
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error ? error.message : "予期せぬエラーが発生しました"
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Qiita記事をキャッシュから取得する
   */
  useEffect(() => {
    const cachedArticles = getCachedArticles();
    if (cachedArticles) {
      setArticles(cachedArticles);
      return;
    }

    setIsLoading(true);
    fetchQiitaData();
  }, [fetchQiitaData]);

  /**
   * ロードテキストを更新する
   */
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isLoading) {
      intervalId = setInterval(() => {
        setLoadingText((prev) => {
          switch (prev) {
            case ".":
              return "..";
            case "..":
              return "...";
            default:
              return ".";
          }
        });
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading]);

  const articlesPerPage = 10;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  /**
   * 前のページに移動する
   */
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  /**
   * 次のページに移動する
   */
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return {
    articles,
    isLoading,
    loadingText,
    currentPage,
    error,
    currentArticles,
    totalPages,
    handlePrevPage,
    handleNextPage,
    fetchQiitaData,
  };
};
