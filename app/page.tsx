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
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <FeaturedProducts />
        <FaqSection />
      </div>
    </>
  );
}
