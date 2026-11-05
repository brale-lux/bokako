import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getCategory, getProduct, isPurchasable, products } from "@/data/products";
import { ProductCover } from "@/components/product-cover";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const price = formatPrice(product);
  const purchasable = isPurchasable(product);

  // Structured data only for genuinely purchasable products.
  const jsonLd = purchasable
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.shortDescription,
        ...(product.priceEUR != null && {
          offers: { "@type": "Offer", price: product.priceEUR, priceCurrency: "EUR", url: product.checkoutUrl },
        }),
      }
    : null;

  return (
    <article className="px-5 py-12 sm:px-10">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      )}
      <div className="mx-auto max-w-[1100px]">
        <Link href="/#catalog" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
          ← All products
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-card shadow-soft">
            <ProductCover product={product} priority />
          </div>

          <div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold ring-1 ring-navy/10">
              {getCategory(product.category).label}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{product.title}</h1>
            <p className="mt-4 leading-relaxed text-ink-soft">{product.fullDescription}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-bold">Format</dt>
                <dd className="text-ink-soft">{product.fileFormat}</dd>
              </div>
              {price && (
                <div>
                  <dt className="font-bold">Price</dt>
                  <dd className="text-ink-soft">{price}</dd>
                </div>
              )}
            </dl>

            <div className="mt-8">
              {purchasable ? (
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center rounded-full bg-lime px-8 font-bold shadow-glow transition hover:-translate-y-0.5"
                >
                  Buy Now
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="min-h-12 cursor-not-allowed rounded-full bg-navy/10 px-8 font-bold text-navy/50"
                >
                  Coming soon
                </button>
              )}
            </div>
          </div>
        </div>

        <section aria-labelledby="features" className="mt-14">
          <h2 id="features" className="text-2xl font-extrabold">What&apos;s included</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-navy/5">{f}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="shots" className="mt-14">
          <h2 id="shots" className="text-2xl font-extrabold">Screenshots</h2>
          {product.screenshots.length > 0 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {product.screenshots.map((src, i) => (
                <Image key={src} src={src} alt={`${product.title} screenshot ${i + 1}`} width={1000} height={625} loading="lazy" className="rounded-2xl shadow-soft" />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-ink-soft">Screenshots will be added soon.</p>
          )}
        </section>
      </div>
    </article>
  );
}
