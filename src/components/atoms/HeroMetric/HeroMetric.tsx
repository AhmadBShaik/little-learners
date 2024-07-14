import React from "react";

type HeroMetricProps = {
  name: string;
  value: number;
};

const HeroMetric = ({ name, value }: HeroMetricProps) => {
  return (
    <div className="text-center laptop:text-left">
      <div className="text-[32px] font-extrabold desktop:text-[44px]">
        +{value}
      </div>
      <div className="font-medium desktop:text-[18px]">{name}</div>
    </div>
  );
};

export default HeroMetric;
