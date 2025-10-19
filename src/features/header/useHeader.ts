import { useEffect, useState } from "react";

export const useHeader = () => {
  // マウント状態
  const [mounted, setMounted] = useState(false);
  // 初期ロード状態
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return { mounted, isInitialLoad };
};
