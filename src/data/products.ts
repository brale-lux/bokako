/**
 * PRODUCT CATALOG — the one file to edit to add or change products.
 *
 * To launch a product:
 *   1. set `status` to "available"
 *   2. set `priceEUR` (number, e.g. 29) — leave `null` to hide the price
 *   3. paste your Payhip / Gumroad / Stripe Payment Link into `checkoutUrl`
 *   4. (optional) add images to /public/products and list them in `coverImage` / `screenshots`
 *
 * The "Buy Now" button only appears when status is "available" AND checkoutUrl is a valid https link.
 * Everything below is placeholder copy — review before publishing.
 */

export type CategoryId =
  | "home-energy"
  | "sport-analytics"
  | "health-tracking"
  | "finance-planning";

export interface Category {
  id: CategoryId;
  label: string;
  tagline: string;
}

export const categories: Category[] = [
  { id: "home-energy", label: "Home & Energy", tagline: "Solar, heat pump & renovation calculators" },
  { id: "sport-analytics", label: "Sport & Analytics", tagline: "Data, stats & performance tracking" },
  { id: "health-tracking", label: "Health & Tracking", tagline: "Monitor, track & analyse your progress" },
  { id: "finance-planning", label: "Finance & Planning", tagline: "Plan ahead with clear numbers" },
];

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: CategoryId;
  shortDescription: string;
  fullDescription: string;
  /** Confirmed price in euro, or null while undecided (price is then hidden). */
  priceEUR: number | null;
  /** Path under /public, e.g. "/products/solar-cover.webp". Empty = generated placeholder cover. */
  coverImage: string;
  screenshots: string[];
  features: string[];
  fileFormat: string;
  /** External checkout link (Payhip, Gumroad, Stripe Payment Link). Empty until configured. */
  checkoutUrl: string;
  status: "available" | "coming-soon";
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "solar-quote-analyzer",
    slug: "solar-quote-analyzer",
    title: "Solar Quote Analyzer",
    category: "home-energy",
    shortDescription: "Compare solar installation quotes side by side.",
    fullDescription:
      "An Excel workbook for comparing solar panel quotes. Enter the details from each quote and see costs, expected yield and payback laid out clearly.",
    priceEUR: null,
    coverImage: "/products/solar-quote-analyzer-card.webp",
    screenshots: [],
    features: ["Side-by-side quote comparison", "Cost and payback overview", "Editable assumptions"],
    fileFormat: "Excel (.xlsx)",
    checkoutUrl: "",
    status: "coming-soon",
    featured: true,
  },
  {
    id: "heat-pump-quote-analyzer",
    slug: "heat-pump-quote-analyzer",
    title: "Heat Pump Quote Analyzer",
    category: "home-energy",
    shortDescription: "Weigh heat pump offers against your current heating costs.",
    fullDescription:
      "An Excel workbook for evaluating heat pump quotes against your current heating costs.",
    priceEUR: null,
    coverImage: "",
    screenshots: [],
    features: ["Quote comparison", "Running-cost estimate", "Editable assumptions"],
    fileFormat: "Excel (.xlsx)",
    checkoutUrl: "",
    status: "coming-soon",
    featured: true,
  },
  {
    id: "renovation-quote-analyzer",
    slug: "renovation-quote-analyzer",
    title: "Renovation Quote Analyzer",
    category: "home-energy",
    shortDescription: "Line up renovation quotes and see where the money goes.",
    fullDescription:
      "An Excel workbook for breaking down and comparing renovation quotes.",
    priceEUR: null,
    coverImage: "",
    screenshots: [],
    features: ["Itemised quote comparison", "Budget tracking", "Editable assumptions"],
    fileFormat: "Excel (.xlsx)",
    checkoutUrl: "",
    status: "coming-soon",
    featured: false,
  },
  {
    id: "betting-tracker",
    slug: "betting-tracker",
    title: "Betting Tracker",
    category: "sport-analytics",
    shortDescription: "Log your bets and analyse your results over time.",
    fullDescription:
      "An Excel workbook for recording bets and reviewing performance with simple statistics.",
    priceEUR: null,
    coverImage: "",
    screenshots: [],
    features: ["Bet log", "Performance statistics", "Charts"],
    fileFormat: "Excel (.xlsx)",
    checkoutUrl: "",
    status: "coming-soon",
    featured: true,
  },
  {
    id: "financial-independence-planner",
    slug: "financial-independence-planner",
    title: "Financial Independence Planner",
    category: "finance-planning",
    shortDescription: "Model your savings and see how close you are to your goal.",
    fullDescription:
      "An Excel workbook for projecting savings, spending and progress towards financial independence. This is a planning tool, not financial advice.",
    priceEUR: null,
    coverImage: "",
    screenshots: [],
    features: ["Savings projection", "Scenario inputs", "Progress overview"],
    fileFormat: "Excel (.xlsx)",
    checkoutUrl: "",
    status: "coming-soon",
    featured: false,
  },
  {
    id: "health-tracking-template",
    slug: "health-tracking-template",
    title: "Health Tracking Template",
    category: "health-tracking",
    shortDescription: "Track habits and measurements and spot trends.",
    fullDescription:
      "A template for tracking health measurements and habits over time.",
    priceEUR: null,
    coverImage: "",
    screenshots: [],
    features: ["Daily tracking", "Trend charts"],
    fileFormat: "Excel (.xlsx)",
    checkoutUrl: "",
    status: "coming-soon",
    featured: false,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

/** A valid https link is required before any purchase action is shown. */
export function hasValidCheckout(p: Product) {
  try {
    return new URL(p.checkoutUrl).protocol === "https:";
  } catch {
    return false;
  }
}

export function isPurchasable(p: Product) {
  return p.status === "available" && hasValidCheckout(p);
}

export function formatPrice(p: Product) {
  return p.priceEUR == null
    ? null
    : new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(p.priceEUR);
}
