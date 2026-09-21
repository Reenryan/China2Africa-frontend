import AirFreightBenefits from "../../components/airFreight/AirFreightBenefits";
import AirFreightCargo from "../../components/airFreight/AirFreightCargo";
import AirFreightCTA from "../../components/airFreight/AirFreightCTA";
import AirFreightDestinations from "../../components/airFreight/AirFreightDestinations";
import AirFreightHero from "../../components/airFreight/AirFreightHero";
import AirFreightIntro from "../../components/airFreight/AirFreightIntro";
import AirFreightProcess from "../../components/airFreight/AirFreightProcess";
import AirFreightServices from "../../components/airFreight/AirFreightServices";

function AirFreight() {
  return (
    <>
      <AirFreightHero />
      <AirFreightIntro />
      <AirFreightServices />
      <AirFreightBenefits />
      <AirFreightProcess />
      <AirFreightCargo />
      <AirFreightDestinations />
      <AirFreightCTA />
    </>
  );
}

export default AirFreight;