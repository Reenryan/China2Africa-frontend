import LocalDeliveryAreas from "../../components/localDelivery/LocalDeliveryAreas";
import LocalDeliveryBenefits from "../../components/localDelivery/LocalDeliveryBenefits";
import LocalDeliveryCTA from "../../components/localDelivery/LocalDeliveryCTA";
import LocalDeliveryHero from "../../components/localDelivery/LocalDeliveryHero";
import LocalDeliveryIntro from "../../components/localDelivery/LocalDeliveryIntro";
import LocalDeliveryProcess from "../../components/localDelivery/LocalDeliveryProcess";
import LocalDeliveryServices from "../../components/localDelivery/LocalDeliveryServices";

function LocalDelivery() {
  return (
    <>
      <LocalDeliveryHero />
        <LocalDeliveryIntro />
        <LocalDeliveryServices />
        <LocalDeliveryBenefits />
        <LocalDeliveryProcess />
        <LocalDeliveryAreas />
        <LocalDeliveryCTA />
    
    </>
  );
}

export default LocalDelivery;