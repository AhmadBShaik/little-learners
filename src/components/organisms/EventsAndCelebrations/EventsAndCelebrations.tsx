import Grid from "@/components/atoms/Grid";
import EventCard from "@/components/molecules/EventCard";
import Section from "@/components/molecules/Section";

function EventsAndCelebrations() {
  const events = [
    {
      image: "/assets/events-and-celebrations/Annual-Sports-Day.png",
      title: "Annual Sports Day",
      description:
        "A day filled with friendly competition, team spirit, and sportsmanship.",
    },
    {
      image: "/assets/events-and-celebrations/Cultural-Festivals.png",
      title: "Cultural Festivals",
      description:
        "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
    },
    {
      image: "/assets/events-and-celebrations/Art-Exhibitions.png",
      title: "Art Exhibitions",
      description:
        "Showcasing our students' artistic talents through exhibitions and displays.",
    },
    {
      image: "/assets/events-and-celebrations/Science-Fair.png",
      title: "Science Fair",
      description:
        "A platform for budding scientists to present their innovative projects and experiments.",
    },
    {
      image: "/assets/events-and-celebrations/International-Day.png",
      title: "International Day",
      description:
        "A vibrant celebration of our diverse community, embracing cultures from around the world.",
    },
    {
      image: "/assets/events-and-celebrations/Graduation-Ceremony.png",
      title: "Graduation Ceremony",
      description:
        "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
    },
  ];
  return (
    <Section
      id="features"
      intro="Our Features"
      title="Events & Celebrations"
      description="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
    >
      <Grid className="w-full gap-[40px] laptop:grid-cols-3 desktop:gap-y-[50px]">
        {events.map((event, index) => (
          <EventCard
            index={index}
            key={event.title}
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default EventsAndCelebrations;
