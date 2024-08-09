import React from "react";
import Card from "../Card";
import PageIntroImage from "@/components/atoms/PageIntroImage";
import { cn } from "@/helpers/utils";
import Badge from "@/components/atoms/Badge";

type PageIntroProps = {
  intro: string;
  title: string;
  content: React.ReactNode;
};

function PageIntro({ intro, title, content }: PageIntroProps) {
  return (
    <Card className={cn("relative", "!p-0")}>
      <div className="absolute size-[100px] laptop:size-[137px] desktop:size-[200px]">
        <PageIntroImage />
      </div>
      <div className="grid grid-cols-1 items-center gap-5 px-[30px] py-[50px] laptop:grid-cols-2 laptop:gap-[50px] laptop:px-[80px] laptop:py-[100px] desktop:px-[120px] desktop:py-[150px]">
        <div className="flex flex-col items-center laptop:items-start laptop:justify-start">
          <div className="mb-[10px] w-fit desktop:mb-[14px]">
            <Badge text={intro} />
          </div>
          <div className="text-center text-[28px] font-bold laptop:text-start laptop:text-[38px] desktop:text-[48px]">
            {title}
          </div>
        </div>
        <div className="text-center laptop:text-left desktop:text-xl">
          {content}
        </div>
      </div>
    </Card>
  );
}

export default PageIntro;
