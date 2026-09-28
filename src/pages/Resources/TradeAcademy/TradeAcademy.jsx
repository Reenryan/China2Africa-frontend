import TradeAcademyArticles from "../../../components/Resources/TradeAcademy/TradeAcademyArticles";
import TradeAcademyCategories from "../../../components/Resources/TradeAcademy/TradeAcademyCategories";
import TradeAcademyCTA from "../../../components/Resources/TradeAcademy/TradeAcademyCTA";
import TradeAcademyFeatured from "../../../components/Resources/TradeAcademy/TradeAcademyFeatured";
import TradeAcademyHero from "../../../components/Resources/TradeAcademy/TradeAcademyHero";
import TradeAcademyIntro from "../../../components/Resources/TradeAcademy/TradeAcademyIntro";

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
