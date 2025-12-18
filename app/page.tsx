import { IS_UNDER_CONSTRUCTION } from "@/lib/config";
import { UnderConstruction } from "@/components/under-construction";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  if (IS_UNDER_CONSTRUCTION) {
    return <UnderConstruction />;
  }

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <FaqSection />
    </>
  );
}
