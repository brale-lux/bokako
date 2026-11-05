import type { CategoryId } from "@/data/products";

type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const SearchIcon = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const HeartIcon = ({ className, filled }: P & { filled?: boolean }) => (
  <svg {...base} className={className} fill={filled ? "currentColor" : "none"}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.500 15.400 12 20 12 20Z" />
  </svg>
);
export const BagIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
);
export const ChevronIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="m9 6 6 6-6 6" /></svg>
);
export const ArrowIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);

const HomeEnergy = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 11 12 4l8 7" /><path d="M6 10v9h12v-9" /><path d="m12.500 11-2 3h3l-2 3" /></svg>
);
const Sport = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 20V10" /><path d="M12 20V4" /><path d="M19 20v-7" /></svg>
);
const Health = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 20s-7.500-4.600-7.500-10.200A4.300 4.300 0 0 1 12 7.400a4.300 4.300 0 0 1 7.500 2.400C19.500 15.400 12 20 12 20Z" /><path d="M7 12h3l1.500-2.500L13 14l1-2h3" /></svg>
);
const Finance = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="8" /><path d="M14.500 9.500c-.5-.8-1.400-1.200-2.500-1.200-1.400 0-2.400.7-2.400 1.800 0 2.300 5 1.200 5 3.600 0 1.100-1 1.800-2.600 1.800-1.100 0-2-.4-2.600-1.200" /><path d="M12 6.500v1.800M12 15.700v1.800" /></svg>
);
export const GridIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="4" y="4" width="6.500" height="6.500" rx="1.500" /><rect x="13.500" y="4" width="6.500" height="6.500" rx="1.500" /><rect x="4" y="13.500" width="6.500" height="6.500" rx="1.500" /><rect x="13.500" y="13.500" width="6.500" height="6.500" rx="1.500" /></svg>
);

export function CategoryGlyph({ id, className }: { id: CategoryId | "all"; className?: string }) {
  switch (id) {
    case "home-energy": return <HomeEnergy className={className} />;
    case "sport-analytics": return <Sport className={className} />;
    case "health-tracking": return <Health className={className} />;
    case "finance-planning": return <Finance className={className} />;
    default: return <GridIcon className={className} />;
  }
}
