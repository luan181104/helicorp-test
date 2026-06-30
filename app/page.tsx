import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Specifications from "./components/sections/Specifications";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ProductShowcase from "./components/sections/ProductShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <Specifications />
      <Testimonials />
      <FAQ />
    </>
  );
}