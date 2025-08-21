import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";

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
