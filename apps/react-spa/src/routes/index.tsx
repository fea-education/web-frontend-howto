import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/common/Hero";
import CategoryGrid from "@/components/catalog/CategoryGrid";
import FeaturedProducts from "@/components/catalog/FeaturedProducts";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import Newsletter from "@/components/common/Newsletter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}
