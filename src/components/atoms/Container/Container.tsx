import { cn } from "@/helpers/utils";
import React from "react";
interface ContainerProps {
  children: React.ReactNode;
  large?: boolean;
}
function Container({ children, large }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1920px] px-[16px]",
        large ? "laptop:px-[50px]" : "laptop:px-[80px] desktop:px-[162px]",
      )}
    >
      {children}
    </div>
  );
}

export default Container;
