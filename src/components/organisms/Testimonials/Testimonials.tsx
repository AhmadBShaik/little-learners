import Section from "@/components/molecules/Section";
import TestimonialsCarousel from "../Carousel";
function Testimonials() {
  return (
    <Section
      id="our-testimonials"
      intro="Their Happy Words 🤗"
      title="Our Testimonials"
      description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
    >
      <TestimonialsCarousel />
    </Section>
  );
}

export default Testimonials;
