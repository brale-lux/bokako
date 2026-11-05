import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bokako",
    short_name: "Bokako",
    description: "Practical Excel templates and calculators to analyse, plan and make better decisions.",
    start_url: "/",
    display: "standalone",
    background_color: "#06182A",
    theme_color: "#06182A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
