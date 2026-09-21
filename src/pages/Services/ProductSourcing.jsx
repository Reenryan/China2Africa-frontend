import ProductSourcingAudience from "../../components/productSourcing/ProductAudience";
import ProductCategories from "../../components/productSourcing/ProductCategories";
import ProductSourcingCTA from "../../components/productSourcing/ProductSourcingCTA";
import ProductSourcingHero from "../../components/productSourcing/ProductSourcingHero";
import ProductSourcingIntro from "../../components/productSourcing/ProductSourcingIntro";

function ProductSourcing() {
  return (
    <>
      <ProductSourcingHero />
        <ProductSourcingIntro />
        <ProductCategories />
        <ProductSourcingAudience />
        <ProductSourcingCTA />
    </>
  );
}

export default ProductSourcing;