import React from "react";
import Card from "../Card";
import { cn } from "@/helpers/utils";
import Image from "next/image";

type EventCardProps = {
  title: string;
  image: string;
  description: string;
  index: number;
};
function EventCard({ title, image, description, index }: EventCardProps) {
  return (
    <Card key={title} className="!px-0">
      <div className="pb-[30px] laptop:pb-[40px] desktop:pb-[50px]">
        <div className="relative flex aspect-[3/2] w-full justify-center">
          <div
            className={cn(
              "absolute inset-0 z-0 flex w-full flex-col",
              index % 3 === 1 ? "justify-end" : "justify-center",
            )}
          >
            <div className="h-[93px] border-y-2 border-y-secondary-15 bg-primary-97"></div>
          </div>

          <div className="z-10 w-full px-[30px] laptop:px-[40px] desktop:px-[50px]">
            <div className="relative h-full w-full overflow-hidden rounded-xl border-2 border-secondary-15 bg-primary-97">
              <Image
                src={image}
                alt=""
                fill
                className="scale-105 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] pb-4 text-center text-[22px] font-bold laptop:px-[40px] laptop:text-[24px] desktop:px-[50px] desktop:pb-5 desktop:text-[28px]">
        {title}
      </div>
      <div className="px-[30px] text-center laptop:px-[40px] desktop:px-[50px] desktop:text-[20px]">
        {description}
      </div>
    </Card>
  );
}

export default EventCard;
