import { cn } from "@/helpers/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Card({ className, children }: Props) {
  return (
    <div
      className={cn(
        "relative rounded-xl border-2 border-black bg-white px-[30px] py-[50px] shadow-[4px_4px_0px_#000000] laptop:px-[40px] laptop:py-[60px] desktop:px-[50px] desktop:py-[80px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
