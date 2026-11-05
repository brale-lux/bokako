import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { legalReady } from "@/data/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokako.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    ...(legalReady ? ["/privacy", "/terms", "/refunds"] : []),
    ...products.map((p) => `/products/${p.slug}`),
  ].map((path) => ({ url: `${base}${path}` }));
}
