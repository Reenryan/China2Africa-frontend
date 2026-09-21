import CTASection from "../../components/home/CTASection";
import Hero from "../../components/home/Hero";
import HowItWorks from "../../components/home/HowItWorks";
import ProductsPreview from "../../components/home/ProductsPreview";
import ServicesPreview from "../../components/home/ServicesPreview";
import Testimonials from "../../components/home/Testimonials";
import WhyChooseUs from "../../components/home/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <HowItWorks />
      <ProductsPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;

