import Link from "next/link";
import { Logo } from "./logo";
import { legalReady } from "@/data/site";

const link = "inline-flex min-h-8 items-center hover:text-lime";

export function Footer() {
  return (
    <footer className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-[1240px] rounded-card bg-navy p-8 text-white/80 sm:p-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm">Digital tools for smarter calculations.</p>
          </div>
          <nav aria-label="Explore">
            <h2 className="font-bold text-white">Explore</h2>
            <ul className="mt-3 space-y-1 text-sm">
              <li><Link className={link} href="/#catalog">Products</Link></li>
              <li><Link className={link} href="/#how-it-works">How It Works</Link></li>
              <li><Link className={link} href="/#about">About</Link></li>
            </ul>
          </nav>
          {legalReady && (
            <nav aria-label="Legal">
              <h2 className="font-bold text-white">Legal</h2>
              <ul className="mt-3 space-y-1 text-sm">
                <li><Link className={link} href="/privacy">Privacy Policy</Link></li>
                <li><Link className={link} href="/terms">Terms</Link></li>
                <li><Link className={link} href="/refunds">Refund &amp; Download Policy</Link></li>
              </ul>
            </nav>
          )}
          <div>
            <h2 className="font-bold text-white">Support</h2>
            {/* TODO(owner): replace with a real contact email */}
            <p className="mt-3 text-sm">Contact details coming soon.</p>
          </div>
        </div>
        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Bokako. All rights reserved.</p>
      </div>
    </footer>
  );
}
