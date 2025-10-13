import type { ProductionItem } from "./Production.types";

/**
 * モーダルが存在するかどうかを返す
 * @param item - プロダクションアイテム
 * @returns モーダルが存在するかどうか
 */
export const hasModal = (item?: ProductionItem): boolean => {
  if (!item || !item.modal) return false;
  const { longDescription, images, demoUrl, repoUrl } = item.modal;

  // 説明文が存在するかどうか
  const hasLongDescription = Boolean(
    typeof longDescription === "string" && longDescription.trim().length > 0
  );

  // 画像が存在するかどうか
  const hasImages = Array.isArray(images) && images.length > 0;

  // リンクが存在するかどうか
  const hasLinks = Boolean(demoUrl || repoUrl);

  // コンテンツが存在するかどうか
  const hasContent = hasLongDescription || hasImages || hasLinks;

  return hasContent;
};
