import type { ProductionItem } from "./production.types";

// 手動追加する場合はこちらのフォーマットに合わせる
export const PRODUCTION_ITEM_FORMAT: ProductionItem = {
  id: "",
  title: "",
  description: "",
  url: "",
  publishedAt: "",
  thumbnailUrl: "",
  tags: [""],
  modal: {
    images: [""],
    demoUrl: "",
    repoUrl: "",
  },
};
