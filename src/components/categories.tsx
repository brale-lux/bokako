"use client";

import Image from "next/image";
import { categories, type CategoryId } from "@/data/products";
import { ChevronIcon } from "./icons";
import { useStore, type CategoryFilter } from "./store-provider";

const cardArt: Partial<Record<CategoryId, { src: string; bg: string }>> = {
  "home-energy": { src: "/icons/sun-3d.svg", bg: "from-[#e7fbb8] to-[#f6fde7]" },
  "sport-analytics": { src: "/icons/bars-3d.svg", bg: "from-[#cdeafb] to-[#eef7fd]" },
  "health-tracking": { src: "/icons/heart-3d.svg", bg: "from-[#e3d2fa] to-[#f4edfd]" },
};

const pillIcon: Record<CategoryFilter, string> = {
  "home-energy": "/icons/sun-3d.svg",
  "sport-analytics": "/icons/bars-3d.svg",
  "health-tracking": "/icons/heart-3d.svg",
  "finance-planning": "/icons/bars-3d.svg",
  all: "/icons/layers-3d.svg",
};

function GridMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-9 text-lime" fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="3" y="3" width="11" height="11" rx="4" /><rect x="18" y="3" width="11" height="11" rx="4" />
      <rect x="3" y="18" width="11" height="11" rx="4" /><rect x="18" y="18" width="11" height="11" rx="4" />
    </svg>
  );
}

export function Categories() {
  const { setCategory, setFavoritesOnly, setQuery } = useStore();

  const choose = (c: CategoryFilter) => {
    setCategory(c);
    setFavoritesOnly(false);
    setQuery("");
  };

  const pills: { id: CategoryFilter; label: string }[] = [
    ...categories.filter((c) => c.id in cardArt).map((c) => ({ id: c.id, label: c.label })),
    { id: "all", label: "All Products" },
  ];

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-8">
      <div>
        <hr className="border-0 border-t-2 border-lime" />
        <h2 className="mt-8 flex items-center gap-3 text-2xl font-extrabold">
          <GridMark />
          Explore Categories
        </h2>
        <ul className="mt-5 flex flex-col gap-3">
          {pills.map((p) => (
            <li key={p.id}>
              <a
                href="#catalog"
                onClick={() => choose(p.id)}
                className="group flex min-h-14 items-center gap-4 rounded-full border-[1.5px] border-navy bg-white px-5 py-2 text-lg font-bold transition hover:-translate-y-0.5 hover:border-lime hover:shadow-glow"
              >
                <Image src={pillIcon[p.id]} alt="" width={40} height={40} className="size-10" />
                <span className="flex-1">{p.label}</span>
                <ChevronIcon className="size-5 stroke-[2.6] transition group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="hide-scrollbar -mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-6 pt-1 sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pt-[calc(2rem+2px)]">
        {categories
          .filter((c) => c.id in cardArt)
          .map((c) => {
            const art = cardArt[c.id]!;
            return (
              <li key={c.id} className="w-[17rem] shrink-0 snap-start lg:w-auto">
                <a
                  href="#catalog"
                  onClick={() => choose(c.id)}
                  className={`group flex h-full min-h-[20rem] flex-col rounded-[1.75rem] bg-gradient-to-b ${art.bg} p-6 shadow-soft ring-1 ring-white/80 transition hover:-translate-y-1.5 hover:shadow-lift`}
                >
                  <h3 className="text-2xl font-extrabold leading-tight">{c.label}</h3>
                  <p className="mt-2 max-w-[15rem] text-base font-medium leading-snug">{c.tagline}</p>
                  <div className="mt-auto flex justify-center pt-4">
                    <Image
                      src={art.src}
                      alt=""
                      width={200}
                      height={200}
                      className="h-40 w-40 drop-shadow-[0_14px_14px_rgba(6,24,42,0.18)] transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
