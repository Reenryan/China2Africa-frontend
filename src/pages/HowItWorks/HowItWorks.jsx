import HowItWorksAccount from "../../components/howItWorks/HowItworksAccount";
import HowItWorksConfirmation from "../../components/howItWorks/HowItWorksConfirmation";
import HowItWorksCTA from "../../components/howItWorks/HowItWorksCTA";
import HowItWorksCustomerPortal from "../../components/howItWorks/HowItWorksCustomerPortal";
import HowItWorksDelivery from "../../components/howItWorks/HowItWorksDelivery";
import HowItWorksHero from "../../components/howItWorks/HowItWorksHero";
import HowItWorksOverview from "../../components/howItWorks/HowItWorksOverview";
import HowItWorksShipping from "../../components/howItWorks/HowItWorksShipping";
import HowItWorksSourcing from "../../components/howItWorks/HowItWorksSourcing";

function Home() {
  return (
    <>
        <HowItWorksHero />
        <HowItWorksOverview />
        <HowItWorksAccount />
        <HowItWorksCustomerPortal />
        <HowItWorksSourcing />
        <HowItWorksConfirmation />
        <HowItWorksShipping />
        <HowItWorksDelivery />
        <HowItWorksCTA />

    </>
  );
}

export default Home;
