import { useState } from "react";
import { PRODUCTION_ITEMS } from "./Production.constants";
import type { ProductionItem } from "./Production.types";

export const useProduction = () => {
  // 選択されたアイテムのID
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // モーダルが開いているかどうか
  const [isOpen, setIsOpen] = useState(false);

  const items = PRODUCTION_ITEMS;
  const selectedItem: ProductionItem | undefined = items.find(
    (i) => i.id === selectedId
  );

  /**
   * モーダルを開く
   * @param id - アイテムのID
   */
  const openModal = (id: string) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  /**
   * モーダルを閉じる
   */
  const closeModal = () => {
    setIsOpen(false);
    setSelectedId(null);
  };

  return { items, selectedItem, isOpen, openModal, closeModal };
};
