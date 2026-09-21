import TradeAcademyArticles from "../../components/Resources/TradeAcademyArticles";
import TradeAcademyCategories from "../../components/Resources/TradeAcademyCategories";
import TradeAcademyCTA from "../../components/Resources/TradeAcademyCTA";
import TradeAcademyFeatured from "../../components/Resources/TradeAcademyFeatured";
import TradeAcademyHero from "../../components/Resources/TradeAcademyHero";
import TradeAcademyIntro from "../../components/Resources/TradeAcademyIntro";

function TradeAcademy() {
  return (
    <>
      <TradeAcademyHero />
      <TradeAcademyIntro />
      <TradeAcademyCategories />
      <TradeAcademyFeatured />
      <TradeAcademyArticles />
      <TradeAcademyCTA />

    </>
  );
}

export default TradeAcademy;
