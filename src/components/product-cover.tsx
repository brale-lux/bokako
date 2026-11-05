import Image from "next/image";
import type { Product } from "@/data/products";

const art: Record<Product["category"], { src: string; bg: string }> = {
  "home-energy": { src: "/icons/sun-3d.svg", bg: "from-mint to-[#dcf7b8]" },
  "sport-analytics": { src: "/icons/bars-3d.svg", bg: "from-sky to-[#b9e2fb]" },
  "health-tracking": { src: "/icons/heart-3d.svg", bg: "from-lavender to-[#d3bdf3]" },
  "finance-planning": { src: "/icons/bars-3d.svg", bg: "from-sky to-lavender" },
};

/** Real cover/banner when supplied (letterbox matches the banner background), otherwise a branded placeholder tile. */
export function ProductCover({ product, priority = false }: { product: Product; priority?: boolean }) {
  if (product.coverImage) {
    return (
      <div className="relative aspect-[8/5] w-full bg-[#fbfcfc]">
        <Image
          src={product.coverImage}
          alt={`${product.title} banner`}
          fill
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }
  const a = art[product.category];
  return (
    <div className={`grid aspect-[8/5] w-full place-items-center bg-gradient-to-br ${a.bg}`}>
      <Image src={a.src} alt="" width={120} height={120} className="h-24 w-24 drop-shadow-[0_12px_12px_rgba(6,24,42,0.2)]" />
    </div>
  );
}
