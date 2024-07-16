import Card from "@/components/molecules/Card";
import Section from "@/components/molecules/Section";
import { raleway } from "@/fonts";
import { cn } from "@/helpers/utils";
import { ArrowRight } from "@/icons";
import Link from "next/link";

const Dash = ({ type = "middle" }: { type?: "start" | "end" | "middle" }) => {
  return (
    <div className="relative w-full py-2">
      <div className="bg-primary-80 pb-[6px] pr-[6px] pt-[4px]">
        <div className="h-[2px] w-full bg-black"></div>
      </div>
      {type === "start" ? (
        <div className="absolute top-1/2 h-5 w-5 -translate-y-[50%] rounded-full bg-white ring-2 ring-black"></div>
      ) : null}
      {type === "end" ? (
        <div className="absolute -right-1 top-1/2 h-5 w-5 -translate-y-[50%] rounded-full bg-white ring-2 ring-black"></div>
      ) : null}
    </div>
  );
};
const DashedLine = () => {
  return (
    <div className="flex w-full gap-2.5">
      {Array.from(Array(5).keys()).map((_, index) => (
        <Dash
          key={`dash-${index}`}
          type={index === 0 ? "start" : index === 4 ? "end" : "middle"}
        />
      ))}
    </div>
  );
};

function Explore() {
  const pages = [
    {
      title: "About Us",
      description:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
      link: "/about-us",
    },
    {
      title: "Academics",
      description:
        "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
      link: "/academics",
    },
    {
      title: "Student Life",
      description:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
      link: "student-life",
    },
    {
      title: "Admissions",
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      link: "/admissions",
    },
  ];
  return (
    <Section
      intro="Explore More"
      title="Navigate through our Pages"
      description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
    >
      <div className="grid grid-cols-1 gap-10 laptop:grid-cols-2 desktop:gap-[50px]">
        {pages.map((page) => (
          <Card
            key={page.title}
            className="space-y-[40px] p-[40px] laptop:space-y-[60px] laptop:p-[60px] desktop:space-y-[80px] desktop:p-[80px]"
          >
            <div className="space-y-5 laptop:space-y-6 desktop:space-y-[30px]">
              <div
                className={cn(
                  raleway.className,
                  "text-center text-[28px] font-bold laptop:text-[34px] desktop:text-[48px]",
                )}
              >
                {page.title}
              </div>
              <div className="flex">
                <DashedLine />
              </div>
              <div className="mt-2.5 laptop:mt-4 desktop:mt-5">
                {page.description}
              </div>
            </div>
            <Link
              href={page.link}
              className="flex w-full items-center justify-center rounded-md border-2 border-secondary-15 bg-primary-90 py-[18px] text-[16px] shadow-[4px_4px_0px_#000000] laptop:rounded-lg laptop:text-[18px] desktop:rounded-[10px] desktop:text-[20px]"
            >
              <div className="flex items-center gap-2.5">
                <div>Learn More</div>
                <div className="aspect-square w-full max-w-[20px] laptop:max-w-[24px] desktop:max-w-[30px]">
                  <ArrowRight />
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Explore;
