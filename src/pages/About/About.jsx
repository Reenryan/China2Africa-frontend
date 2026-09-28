import AboutCTA from "../../components/About/AboutCTA/AboutCTA";
import AboutHero from "../../components/About/AboutHero/AboutHero";
import AboutIntro from "../../components/About/AboutIntro/AboutIntro";
import AboutMission from "../../components/About/AboutMission/AboutMission";
import AboutValues from "../../components/About/AboutValues/AboutValues";
import AboutWhyUs from "../../components/About/AboutWhyUs/AboutWhyUs";
import "./About.css";

function About() {  
    return(
        <>
        <AboutHero />
        <AboutIntro />
        <AboutMission />
        <AboutValues />
        <AboutWhyUs />
        <AboutCTA />
        </>

    );
}

export default About;