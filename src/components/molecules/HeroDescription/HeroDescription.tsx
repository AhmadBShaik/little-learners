import { outfit, raleway } from "@/fonts";
import { cn } from "@/helpers/utils";
import React from "react";
import HeroMetrics from "../HeroMetrics";

function HeroDescription() {
  return (
    <div>
      <div className="mb-2.5 flex flex-col items-center laptop:items-start">
        <div
          className={cn(
            "w-fit border-b-2 border-black pb-1.5 text-base font-medium laptop:text-lg desktop:text-2xl",
          )}
        >
          Welcome to Little Learners Academy
        </div>
      </div>
      <div
        className={cn(
          raleway.className,
          "mb-[18px] text-center text-[30px] font-extrabold laptop:text-left laptop:text-[40px] desktop:text-[54px]",
        )}
      >
        Where Young Minds Blossom and{" "}
        <span className="text-primary-65">Dreams Take Flight.</span>
      </div>
      <div
        className={cn(
          outfit.className,
          "mb-10 text-center text-base laptop:text-left desktop:text-xl",
        )}
      >
        Our kinder garden school provides a nurturing and stimulating
        environment, fostering a love for learning that lasts a lifetime. Join
        us as we embark on an exciting educational journey together!
      </div>
      <HeroMetrics />
    </div>
  );
}

export default HeroDescription;
