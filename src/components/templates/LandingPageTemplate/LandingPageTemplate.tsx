import Container from "@/components/atoms/Container";
import Benefits from "@/components/organisms/Benefits";
import Hero from "@/components/organisms/Hero";
import React from "react";

function LandingPageTemplate() {
  return (
    <Container>
      <main className="w-full">
        <div className="pb mt-[50px] space-y-[80px] pb-[80px] laptop:mt-[60px] laptop:space-y-[150px] laptop:pb-[150px] desktop:mt-[80px] desktop:space-y-[200px] desktop:pb-[200px]">
          <Hero />
          <Benefits />
        </div>
      </main>
    </Container>
  );
}

export default LandingPageTemplate;
