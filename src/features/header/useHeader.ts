import { useState, useEffect } from "react";

/**
 * 初期化遅延時間
 * 3秒間のタイトル表記とその後のヘッダー高さ調整を実現するための遅延時間
 */
const INITIALIZATION_DELAY = 3000;

/**
 * ヘッダー用のカスタムフック
 * 初期ロード状態を管理
 * @returns {UseHeaderReturn} ヘッダー用のカスタムフックの戻り値
 * @property {boolean} isInitialLoad 初期ロード状態
 */
export const useHeader = () => {
  // 初期ロード状態
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, INITIALIZATION_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return { isInitialLoad };
};
