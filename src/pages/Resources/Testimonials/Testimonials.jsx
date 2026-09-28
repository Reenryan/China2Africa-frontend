import TestimonialsCTA from "../../../components/Resources/testimonials/TestimonialsCTA/TestimonialsCTA";
import TestimonialsHero from "../../../components/Resources/testimonials/TestimonialsHero/TestimonialsHero";
import TestimonialsList from "../../../components/Resources/testimonials/TestimonialsList/TestimonialsList";
import "./Testimonials.css";


function Testimonials() {
  return (
    <main className="testimonials-page">
        <TestimonialsHero />
        <TestimonialsList />
        <TestimonialsCTA />
    </main>
  );
}

export default Testimonials;
