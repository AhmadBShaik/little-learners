import Grid from "@/components/atoms/Grid";
import Card from "@/components/molecules/Card";
import Section from "@/components/molecules/Section";
import { AcademicCap, Crown, FaceMask, Flag, Lifebuoy, Users } from "@/icons";
import React from "react";

function Benefits() {
  const benefits = [
    {
      icon: <AcademicCap />,
      title: "Holistic Learning Approach",
      description:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
      icon: <Crown />,
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
      icon: <FaceMask />,
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
      icon: <Flag />,
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
      icon: <Lifebuoy />,
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      icon: <Users />,
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ];
  return (
    <Section
      intro="Children Deserve Bright Future"
      title="Our Benefits"
      description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
    >
      <Grid className="w-full gap-[40px] laptop:grid-cols-3 desktop:gap-y-[50px]">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <div className="absolute -top-[28px] left-[24px] flex size-14 items-center justify-center rounded-lg border-2 border-black bg-primary-90 desktop:-top-[35px] desktop:left-[30px] desktop:size-[74px] desktop:rounded-xl">
              <div className="size-[24px] desktop:size-[34px]">
                {benefit.icon}
              </div>
            </div>
            <div className="pb-4 text-[22px] font-bold laptop:text-[24px] desktop:pb-5 desktop:text-[28px]">
              {benefit.title}
            </div>
            <div className="desktop:text-[20px]">{benefit.description}</div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Benefits;
