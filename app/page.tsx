import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <FeaturedProducts />
        <CtaSection />
        <FaqSection />
      </div>
    </>
  );
}
