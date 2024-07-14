import HeroMetric from "@/components/atoms/HeroMetric";
import React from "react";

function HeroMetrics() {
  const metrics = [
    { name: "Students Passed Out", value: 7000 },
    { name: "Awards & Recognitions", value: 37 },
    { name: "Experience Educators", value: 15 },
  ];
  return (
    <div className="flex flex-col gap-5 divide-y-2 divide-black rounded-[10px] border-2 border-black bg-primary-95 p-10 shadow-[4px_4px_0px_#FFBE99] laptop:flex-row laptop:justify-between laptop:gap-2.5 laptop:divide-y-0 laptop:py-5 desktop:gap-[13px] desktop:px-[50px] desktop:py-6">
      {metrics.map((metric, index) => (
        <div
          className={index == 0 ? "pt-0" : "pt-5 laptop:pt-0"}
          key={metric.name}
        >
          <HeroMetric {...metric} />
        </div>
      ))}
    </div>
  );
}

export default HeroMetrics;
