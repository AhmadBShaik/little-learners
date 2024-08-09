import Grid from "@/components/atoms/Grid";
import FeatureCard from "@/components/molecules/FeatureCard";
import Section from "@/components/molecules/Section";
import { AcademicCap, Crown, FaceMask, Flag, Lifebuoy, Users } from "@/icons";
import ArtBrush from "@/icons/ArtBrush";
import LaboratoryFlask from "@/icons/LaboratoryFlask";
import Music from "@/icons/Music";
import PuzzlePiece from "@/icons/PuzzlePiece";
import Thunder from "@/icons/Thunder";
import Twinkles from "@/icons/Twinkles";

function ExtraCurricularActivities() {
  const activities = [
    {
      icon: <Thunder />,
      title: "Sports and Athletics",
      description:
        "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    },
    {
      icon: <ArtBrush />,
      title: "Art and Creativity",
      description:
        "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    },
    {
      icon: <Music />,
      title: "Music and Performing Arts",
      description:
        "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    },
    {
      icon: <PuzzlePiece />,
      title: "Language Clubs",
      description:
        "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    },
    {
      icon: <LaboratoryFlask />,
      title: "Science Club",
      description:
        "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    },
    {
      icon: <Twinkles />,
      title: "Cooking and Culinary Arts",
      description:
        "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    },
  ];
  return (
    <Section
      id="features"
      intro="Our Features"
      title="Extracurricular Activities"
      description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
    >
      <Grid className="w-full gap-[40px] laptop:grid-cols-3 desktop:gap-y-[50px]">
        {activities.map((activity) => (
          <FeatureCard
            key={activity.title}
            title={activity.title}
            icon={activity.icon}
            description={activity.description}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default ExtraCurricularActivities;
