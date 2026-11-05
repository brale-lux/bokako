"use client";

import Link from "next/link";
import { formatPrice, getCategory, isPurchasable, type Product } from "@/data/products";
import { HeartIcon } from "./icons";
import { ProductCover } from "./product-cover";
import { useStore } from "./store-provider";

export function ProductCard({ product }: { product: Product }) {
  const { favorites, toggleFavorite } = useStore();
  const fav = favorites.includes(product.id);
  const price = formatPrice(product);
  const comingSoon = !isPurchasable(product);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card bg-white shadow-soft ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-lift">
      <ProductCover product={product} />
      <button
        type="button"
        aria-pressed={fav}
        aria-label={fav ? `Remove ${product.title} from favourites` : `Add ${product.title} to favourites`}
        onClick={() => toggleFavorite(product.id)}
        className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white/85 shadow-soft transition hover:bg-white"
      >
        <HeartIcon className="size-5" filled={fav} />
      </button>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-canvas px-3 py-1 ring-1 ring-navy/10">{getCategory(product.category).label}</span>
          {comingSoon && <span className="rounded-full bg-lime px-3 py-1">Coming soon</span>}
        </div>
        <h3 className="mt-4 text-xl font-extrabold">{product.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{product.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          {price ? <span className="text-lg font-extrabold">{price}</span> : <span />}
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex min-h-11 items-center rounded-full bg-navy px-5 text-sm font-bold text-white transition hover:bg-teal"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
