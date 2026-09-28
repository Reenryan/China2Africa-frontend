import ContactCTA from "../../components/contact/ContactCTA/ContactCTA";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInformation from "../../components/contact/ContactInformation/ContactInformation";
import ContactIntro from "../../components/contact/ContactIntro/ContactIntro";

import "./Contact.css";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactIntro />
      <ContactInformation />
      <ContactForm />
      <ContactCTA />
    </>
  );
}

export default Contact;