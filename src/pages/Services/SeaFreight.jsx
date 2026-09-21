import SeaFreightBenefits from "../../components/seaFreight/SeaFreightBenefits";
import SeaFreightCargo from "../../components/seaFreight/SeaFreightCargo";
import SeaFreightCTA from "../../components/seaFreight/SeaFreightCTA";
import SeaFreightDestinations from "../../components/seaFreight/SeaFreightDestinations";
import SeaFreightHero from "../../components/seaFreight/SeaFreightHero";
import SeaFreightIntro from "../../components/seaFreight/SeaFreightIntro";
import SeaFreightProcess from "../../components/seaFreight/SeaFreightProcess";
import SeaFreightServices from "../../components/seaFreight/SeaFreightServices";

function SeaFreight() {
  return (
    <>
      <SeaFreightHero />
        <SeaFreightIntro />
        <SeaFreightServices />
        <SeaFreightBenefits />
        <SeaFreightProcess />
        <SeaFreightCargo />
        <SeaFreightDestinations />
        <SeaFreightCTA />
    </>
  );
}

export default SeaFreight;