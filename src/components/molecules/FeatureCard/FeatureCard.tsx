import React from "react";
import Card from "../Card";

type FeatureCardProps = {
  title: string;
  icon: React.JSX.Element;
  description: string;
};
function FeatureCard({ title, icon, description }: FeatureCardProps) {
  return (
    <Card key={title}>
      <div className="absolute -top-[28px] left-[24px] flex size-14 items-center justify-center rounded-lg border-2 border-black bg-primary-90 desktop:-top-[35px] desktop:left-[30px] desktop:size-[74px] desktop:rounded-xl">
        <div className="size-[24px] desktop:size-[34px]">{icon}</div>
      </div>
      <div className="pb-4 text-[22px] font-bold laptop:text-[24px] desktop:pb-5 desktop:text-[28px]">
        {title}
      </div>
      <div className="desktop:text-[20px]">{description}</div>
    </Card>
  );
}

export default FeatureCard;
