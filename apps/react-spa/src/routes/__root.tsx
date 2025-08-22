import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
});
