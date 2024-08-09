import Grid from "@/components/atoms/Grid";
import FeatureCard from "@/components/molecules/FeatureCard";
import Section from "@/components/molecules/Section";
import { Crown } from "@/icons";
import Book from "@/icons/Book";
import Bulb from "@/icons/Bulb";
import UserGroup from "@/icons/UserGroup";
function StudentSupport() {
  const benefits = [
    {
      icon: <Bulb />,
      title: "Counseling",
      description:
        "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      icon: <Book />,
      title: "Learning Support",
      description:
        "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    },
    {
      icon: <UserGroup />,
      title: "Parent-Teacher Collaboration",
      description:
        "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    },
  ];
  return (
    <Section
      id="support"
      intro="Our Achievements"
      title="Student Support"
      description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
    >
      <Grid className="w-full gap-[40px] laptop:grid-cols-3 desktop:gap-y-[50px]">
        {benefits.map((benefit) => (
          <FeatureCard
            key={benefit.title}
            title={benefit.title}
            icon={benefit.icon}
            description={benefit.description}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default StudentSupport;
