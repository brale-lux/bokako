import { Hero } from "@/components/hero";
import { Catalog } from "@/components/catalog";
import { HowItWorks, About } from "@/components/info-sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <HowItWorks />
      <About />
    </>
  );
}
