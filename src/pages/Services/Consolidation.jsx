import ConsolidationAudience from "../../components/consolidation/ConsolidationAudience";
import ConsolidationBenefits from "../../components/consolidation/ConsolidationBenefits";
import ConsolidationCTA from "../../components/consolidation/ConsolidationCTA";
import ConsolidationHero from "../../components/consolidation/ConsolidationHero";
import ConsolidationIntro from "../../components/consolidation/ConsolidationIntro";
import ConsolidationProcess from "../../components/consolidation/ConsolidationProcess";

function Consolidation() {
  return (
    <>
      <ConsolidationHero />
      <ConsolidationIntro />
      <ConsolidationBenefits />
      <ConsolidationProcess />
      <ConsolidationAudience />
      <ConsolidationCTA />
    </>
  );
}

export default Consolidation;