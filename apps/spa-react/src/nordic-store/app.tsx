import { About } from './about';
import { Footer } from './footer';
import { Hero } from './hero';
import { Layout } from './layout';
import { ProductListing } from './product-listing';
import { TopNavigation } from './top-navigation';

export function App() {
  return (
    <Layout>
      <TopNavigation />
      <Hero />
      <ProductListing />
      <About />
      <Footer />
    </Layout>
  );
}
