"use client";

import { categories, products } from "@/data/products";
import { ProductCard } from "./product-card";
import { useStore, type CategoryFilter } from "./store-provider";

export function Catalog() {
  const { query, category, setCategory, favorites, favoritesOnly, setFavoritesOnly, setQuery } = useStore();

  const q = query.trim().toLowerCase();
  const visible = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (favoritesOnly && !favorites.includes(p.id)) return false;
    if (!q) return true;
    const label = categories.find((c) => c.id === p.category)?.label ?? "";
    return [p.title, p.shortDescription, p.fullDescription, label].some((t) => t.toLowerCase().includes(q));
  });

  const chips: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  const reset = () => {
    setQuery("");
    setCategory("all");
    setFavoritesOnly(false);
  };

  return (
    <section id="catalog" aria-labelledby="catalog-title" className="px-5 py-16 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <h2 id="catalog-title" className="text-4xl font-extrabold tracking-tight">Browse Templates</h2>
        <p className="mt-3 max-w-xl text-ink-soft">Excel templates and calculators for clearer numbers and better decisions.</p>

        <div role="group" aria-label="Filter by category" className="mt-8 flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
              className={`min-h-11 rounded-full px-5 text-sm font-semibold ring-1 transition ${
                category === c.id ? "bg-navy text-white ring-navy" : "bg-white/70 ring-navy/15 hover:bg-white"
              }`}
            >
              {c.label}
            </button>
          ))}
          {favoritesOnly && (
            <span className="inline-flex min-h-11 items-center rounded-full bg-lime px-5 text-sm font-bold">Favourites only</span>
          )}
        </div>

        <p className="sr-only" aria-live="polite">{visible.length} products shown</p>

        {visible.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-card bg-white p-10 text-center shadow-soft">
            <p className="text-lg font-bold">No products match.</p>
            <p className="mt-1 text-ink-soft">Try a different search or category.</p>
            <button type="button" onClick={reset} className="mt-5 min-h-11 rounded-full bg-lime px-6 font-bold">
              Show all products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
