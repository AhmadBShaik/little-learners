import { ArrowLeft, ArrowRight } from "@/icons";
import { LegacyRef, MouseEventHandler } from "react";

const CarouselButton = ({
  type,
  ref,
  onClick,
}: {
  type: "previous" | "next";
  ref: LegacyRef<HTMLDivElement>;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      className="flex size-[48px] cursor-pointer items-center justify-center rounded-lg border-2 border-black bg-white desktop:size-[58px]"
      onClick={onClick}
    >
      <div className="size-[24px] desktop:size-[30px]">
        {type === "previous" ? <ArrowLeft /> : <ArrowRight />}
      </div>
    </div>
  );
};

export default CarouselButton;
