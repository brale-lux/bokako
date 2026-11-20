import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/store-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokako.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bokako — Digital Tools for Smarter Calculations", template: "%s | Bokako" },
  description: "Practical Excel templates and calculators to analyse, plan and make better decisions.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Bokako",
    title: "Bokako — Digital Tools for Smarter Calculations",
    description: "Practical Excel templates and calculators to analyse, plan and make better decisions.",
  },
};

export const viewport: Viewport = { themeColor: "#06182A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">
        <StoreProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-5 focus:py-3 focus:font-bold"
          >
            Skip to content
          </a>
          <div className="p-2 sm:p-4 lg:p-7">
            <div className="overflow-x-clip rounded-[1.5rem] bg-[radial-gradient(ellipse_at_70%_20%,#ffffff,#eaf4fa_70%)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:rounded-[2rem]">
              <Header />
              <main id="main">{children}</main>
              <Footer />
            </div>
          </div>
        </StoreProvider>
        <Analytics />
      </body>
    </html>
  );
}
