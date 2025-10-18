import { NAVIGATION_TABS } from "@/constants/globals.constants";
import type { NavigationTabKey } from "@/types/globals.types";

const SELECTED_TAB_KEY = "selectedTab";

/**
 * localStorageから保存されたタブを取得
 * @returns 保存されたタブキー、無効な場合はnull
 */
export const getSavedTab = (): NavigationTabKey | null => {
  // localStorageにアクセスできない場合はnullを返す
  if (typeof window === "undefined") return null;

  try {
    const savedTab = localStorage.getItem(SELECTED_TAB_KEY);
    if (savedTab && NAVIGATION_TABS.some((tab) => tab.key === savedTab)) {
      return savedTab as NavigationTabKey;
    }
    return null;
  } catch (error) {
    console.warn("localStorage access failed:", error);
    return null;
  }
};

/**
 * タブをlocalStorageに保存
 * @param tab 保存するタブキー
 */
export const saveTab = (tab: NavigationTabKey): void => {
  // ブラウザのlocalStorageにアクセスできない場合は処理を中断
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(SELECTED_TAB_KEY, tab);
  } catch (error) {
    console.warn("localStorage save failed:", error);
  }
};
