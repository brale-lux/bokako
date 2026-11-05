"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "./logo";
import { BagIcon, HeartIcon, SearchIcon } from "./icons";
import { useStore } from "./store-provider";

function Utilities({ light }: { light?: boolean }) {
  const { favorites, favoritesOnly, setFavoritesOnly } = useStore();
  const router = useRouter();
  const goToCatalog = () => {
    if (window.location.pathname === "/") document.getElementById("catalog")?.scrollIntoView();
    else router.push("/#catalog");
  };
  const iconBtn = `relative grid size-11 place-items-center rounded-full transition ${
    light ? "text-white hover:bg-white/10" : "text-navy hover:bg-white"
  }`;
  return (
    <>
      <button
        type="button"
        aria-pressed={favoritesOnly}
        aria-label={favoritesOnly ? "Show all products" : `Show favourites (${favorites.length})`}
        onClick={() => {
          setFavoritesOnly(!favoritesOnly);
          goToCatalog();
        }}
        className={iconBtn}
      >
        <HeartIcon className="size-7" filled={favoritesOnly} />
        {favorites.length > 0 && (
          <span className="absolute right-0.5 top-0.5 grid min-w-4 place-items-center rounded-full bg-lime px-1 text-[10px] font-bold leading-4 text-navy">
            {favorites.length}
          </span>
        )}
      </button>
      {/* No cart in the external-checkout MVP: the bag links to the catalog. */}
      <Link href="/#catalog" aria-label="Browse products to buy" className={iconBtn}>
        <BagIcon className="size-7" />
      </Link>
    </>
  );
}

export function Header() {
  const { query, setQuery } = useStore();
  const router = useRouter();

  const search = (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (window.location.pathname === "/") document.getElementById("catalog")?.scrollIntoView();
        else router.push("/#catalog");
      }}
      className="flex h-12 w-full items-center gap-3 rounded-full border-[1.5px] border-white/70 px-5 text-white focus-within:border-lime focus-within:ring-2 focus-within:ring-lime/60 md:max-w-xl"
    >
      <SearchIcon className="size-5 shrink-0" />
      <label htmlFor="site-search" className="sr-only">Search products</label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search templates, calculators or categories"
        className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-white/90"
      />
    </form>
  );

  return (
    <header className="relative z-30 md:flex md:items-start md:pl-6">
      {/* Dark curved tab: flat bottom edge sweeping up into the page canvas on the right. */}
      <div className="relative rounded-b-[2rem] bg-gradient-to-r from-[#052a44] to-teal px-5 pb-4 pt-4 md:flex-1 md:rounded-br-none md:rounded-bl-[2rem] md:px-8 md:pb-0 md:pt-0">
        <div className="flex h-[4.75rem] items-center gap-6 md:h-[5.5rem]">
          <Logo />
          <div className="hidden flex-1 md:block">{search}</div>
          <div className="ml-auto flex items-center md:hidden">
            <Utilities light />
          </div>
        </div>
        <div className="mt-1 md:hidden">{search}</div>
        <svg
          aria-hidden
          viewBox="0 0 100 88"
          preserveAspectRatio="none"
          className="absolute left-[calc(100%-1px)] top-0 hidden h-full w-24 md:block"
        >
          <defs>
            <linearGradient id="nav-cap" x1="0" x2="1">
              <stop offset="0" stopColor="#003F4B" />
              <stop offset="1" stopColor="#003F4B" />
            </linearGradient>
          </defs>
          <path d="M0 0H100C86 0 82 14 76 34 70 56 58 88 24 88H0Z" fill="url(#nav-cap)" />
        </svg>
      </div>

      <div className="hidden items-center gap-3 pl-28 pr-8 pt-3 md:flex">
        <Utilities />
        <Link href="/#how-it-works" className="ml-2 flex items-center gap-3 text-left">
          <span aria-hidden className="grid size-11 place-items-center rounded-full bg-navy text-lg font-extrabold text-lime">?</span>
          <span className="text-xs leading-tight">
            Need help?
            <br />
            <strong className="text-sm">How It Works</strong>
          </span>
        </Link>
      </div>
    </header>
  );
}
