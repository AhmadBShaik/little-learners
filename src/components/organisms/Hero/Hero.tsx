import Grid from "@/components/atoms/Grid";
import HeroDescription from "@/components/molecules/HeroDescription";
import HeroImage from "@/components/molecules/HeroImage";
import React from "react";

function Hero() {
  return (
    <section className="">
      <Grid className="w-full grid-cols-1 items-center gap-[40px] laptop:grid-cols-2 laptop:gap-[50px] desktop:gap-[60px]">
        <HeroImage />
        <HeroDescription />
      </Grid>
    </section>
  );
}

export default Hero;
