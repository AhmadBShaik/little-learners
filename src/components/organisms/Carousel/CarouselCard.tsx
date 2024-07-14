import Card from "@/components/molecules/Card";
import { Star } from "@/icons";
import Image from "next/image";
import { Testimonial } from "./Carousel";

export const CarouselCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="flex flex-col items-center gap-5 laptop:gap-6 desktop:gap-[30px]">
      <div className="flex flex-col items-center gap-2.5 laptop:gap-3">
        <div className="relative size-[66px] overflow-hidden rounded-full border border-black bg-primary-97 desktop:size-[80px]">
          <Image src={testimonial.user.image} alt="" fill />
        </div>
        <div>{testimonial.user.name}</div>
      </div>
      <div className="flex gap-1 desktop:gap-[5px]">
        {Array.from(Array(5).keys()).map((_, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="size-5 desktop:size-6"
          >
            <Star />
          </div>
        ))}
      </div>
      <div className="text-center">{testimonial.review}</div>
    </Card>
  );
};
