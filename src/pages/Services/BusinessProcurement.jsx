import BusinessProcurementAudience from "../../components/businessProcurement/BusinessProcurementAudience";
import BusinessProcurementBenefits from "../../components/businessProcurement/BusinessProcurementBenefits";
import BusinessProcurementCTA from "../../components/businessProcurement/BusinessProcurementCTA";
import BusinessProcurementHero from "../../components/businessProcurement/BusinessProcurementHero";
import BusinessProcurementIntro from "../../components/businessProcurement/BusinessProcurementIntro";
import BusinessProcurementProcess from "../../components/businessProcurement/BusinessProcurementProcess";
import BusinessProcurementServices from "../../components/businessProcurement/BusinessProcurementServices";

function BusinessProcurement() {
  return (
    <>
      <BusinessProcurementHero />
      <BusinessProcurementIntro />
      <BusinessProcurementServices />
      <BusinessProcurementBenefits />
      <BusinessProcurementProcess />
      <BusinessProcurementAudience />
      <BusinessProcurementCTA />
    </>
  );
}

export default BusinessProcurement;
