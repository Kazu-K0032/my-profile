import { useCallback, useMemo, useState } from "react";
import { PRODUCTION_ITEMS } from "./Production.constants";
import type { ProductionItem } from "./production.types";

export const useProduction = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo(() => PRODUCTION_ITEMS, []);
  const selectedItem = useMemo<ProductionItem | undefined>(
    () => items.find((i) => i.id === selectedId),
    [items, selectedId]
  );

  const openModal = useCallback((id: string) => {
    setSelectedId(id);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedId(null);
  }, []);

  return { items, selectedItem, isOpen, openModal, closeModal };
};
