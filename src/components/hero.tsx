import Link from "next/link";
import { ArrowIcon } from "./icons";
import { HeroArt } from "./hero-art";
import { Categories } from "./categories";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative px-5 pb-12 pt-10 sm:px-10 lg:pt-8">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative z-10">
            <h1
              id="hero-title"
              className="whitespace-nowrap text-[clamp(2rem,9.6vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight lg:text-[min(4.5rem,4.4vw)]"
            >
              Digital Tools for
              <br />
              Smarter
              <br />
              <span className="bg-gradient-to-r from-lime to-[#6fb81a] bg-clip-text text-transparent">Calculations</span>
            </h1>
            <p className="mt-6 max-w-md text-lg font-medium leading-snug text-navy/90">
              Practical Excel templates and calculators to analyse, plan and make better decisions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Link
                href="/#catalog"
                className="group inline-flex items-center gap-4 rounded-full bg-lime py-1.5 pl-7 pr-1.5 text-lg font-bold shadow-glow transition hover:-translate-y-0.5"
              >
                Browse Products
                <span className="grid size-12 place-items-center rounded-full bg-navy text-lime transition group-hover:translate-x-0.5">
                  <ArrowIcon className="size-6" />
                </span>
              </Link>
              <Link
                href="/#how-it-works"
                className="min-h-11 content-center text-lg font-bold underline decoration-2 underline-offset-4 hover:decoration-lime"
              >
                How It Works
              </Link>
            </div>
          </div>

          <div className="relative lg:-ml-10 lg:-mr-6">
            <HeroArt className="mx-auto h-auto w-full max-w-[760px] lg:max-w-none" />
          </div>
        </div>

        <Categories />
      </div>
    </section>
  );
}
