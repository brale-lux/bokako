"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore } from "react";
import type { CategoryId } from "@/data/products";
import {
  getFavoritesServerSnapshot,
  getFavoritesSnapshot,
  subscribeFavorites,
  toggleFavorite,
} from "@/lib/favorites";

export type CategoryFilter = CategoryId | "all";

interface StoreState {
  query: string;
  setQuery: (q: string) => void;
  category: CategoryFilter;
  setCategory: (c: CategoryFilter) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  favoritesOnly: boolean;
  setFavoritesOnly: (v: boolean) => void;
}

const StoreContext = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const favorites = useSyncExternalStore(
    subscribeFavorites,
    getFavoritesSnapshot,
    getFavoritesServerSnapshot,
  );

  const value = useMemo(
    () => ({ query, setQuery, category, setCategory, favorites, toggleFavorite, favoritesOnly, setFavoritesOnly }),
    [query, category, favorites, favoritesOnly],
  );
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
  return ctx;
}
