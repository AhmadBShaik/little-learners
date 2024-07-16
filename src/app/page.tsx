import Benefits from "@/components/organisms/Benefits";
import Explore from "@/components/organisms/Explore";
import FAQs from "@/components/organisms/FAQs";
import Hero from "@/components/organisms/Hero";
import Testimonials from "@/components/organisms/Testimonials";
import LandingPageTemplate from "@/components/templates/LandingPageTemplate";

export default function Home() {
  return (
    <LandingPageTemplate>
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQs />
      <Explore />
    </LandingPageTemplate>
  );
}
