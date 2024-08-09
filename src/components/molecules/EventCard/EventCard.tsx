import React from "react";
import Card from "../Card";

type EventCardProps = {
  title: string;
  image: string;
  description: string;
};
function EventCard({ title, image, description }: EventCardProps) {
  // TODO: Implement image UI
  return (
    <Card key={title}>
      <div className="pb-4 text-center text-[22px] font-bold laptop:text-[24px] desktop:pb-5 desktop:text-[28px]">
        {title}
      </div>
      <div className="text-center desktop:text-[20px]">{description}</div>
    </Card>
  );
}

export default EventCard;
