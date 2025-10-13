import type { ProductionItem } from "./production.types";

/**
 * モーダルが存在するかどうかを返す
 * @param item - プロダクションアイテム
 * @returns モーダルが存在するかどうか
 */
export const hasModal = (item?: ProductionItem): boolean => {
  if (!item || !item.modal) return false;
  const { longDescription, images, demoUrl, repoUrl } = item.modal;
  return Boolean(
    longDescription || (images && images.length > 0) || demoUrl || repoUrl
  );
};
