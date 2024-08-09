import Container from "@/components/atoms/Container";
import PageIntro from "@/components/molecules/PageIntro";
import EventsAndCollaborations from "@/components/organisms/EventsAndCelebrations";
import ExtraCurricularActivities from "@/components/organisms/ExtraCurricularActivities";
import StudentSupport from "@/components/organisms/StudentSupport";
import StudentLifeTemplate from "@/components/templates/StudentLifeTemplate";
import React from "react";

function StudentLife() {
  return (
    <StudentLifeTemplate>
      <div className="mb-[80px] laptop:mb-[150px] desktop:mb-[200px]">
        <Container large>
          <PageIntro
            intro="Enriching Student Life"
            title="Embracing Learning with Discovery and Joy"
            content="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
          />
        </Container>
      </div>
      <Container>
        <ExtraCurricularActivities />
      </Container>

      <Container>
        <EventsAndCollaborations />
      </Container>
      <Container>
        <StudentSupport />
      </Container>
    </StudentLifeTemplate>
  );
}

export default StudentLife;
