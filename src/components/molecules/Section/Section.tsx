import Badge from "@/components/atoms/Badge";
import { raleway } from "@/fonts";
import { cn } from "@/helpers/utils";
import React from "react";

type SectionProps = {
  intro: string;
  title: string;
  description: string;
  children: React.ReactNode;
  id?: string;
};

function Section({ intro, title, description, children, id }: SectionProps) {
  return (
    <section className="flex flex-col items-center" id={id}>
      <Badge text={intro} />
      <div
        className={cn(
          cn(
            raleway.className,
            "mb-[10px] text-[38px] font-bold laptop:mb-[14px] laptop:text-[48px] desktop:mb-[19px] desktop:text-[58px]",
          ),
        )}
      >
        {title}
      </div>
      <div className="mb-[50px] text-center font-medium laptop:mb-[80px] laptop:max-w-[880px] laptop:text-xl desktop:mb-[100px] desktop:max-w-[990px]">
        {description}
      </div>
      {children}
    </section>
  );
}

export default Section;
