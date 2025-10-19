import { NAVIGATION_TABS } from "@/constants/globals.constants";
import type { NavigationTabKey } from "@/types/globals.types";
import HomeClient from "./page.client";

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * サーバーコンポーネント
 * URLパラメータから初期タブを決定し、クライアントコンポーネントに渡す
 */
export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const tabParam = params.tab as string;

  // URLパラメータが有効なタブかチェック
  const isValidTab = NAVIGATION_TABS.some((tab) => tab.key === tabParam);
  const initialTab: NavigationTabKey = isValidTab
    ? (tabParam as NavigationTabKey)
    : "About";

  return <HomeClient initialTab={initialTab} />;
}
