import { useEffect, useState } from "react";

/**
 * 初期ロード状態を管理するカスタムフック
 * @param initialDelay 初期表示の遅延時間（ミリ秒）
 * @returns 初期ロード状態とマウント状態
 */
export function useInitialLoad(initialDelay: number = 3000) {
  const [mounted, setMounted] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  return { mounted, isInitialLoad };
}
