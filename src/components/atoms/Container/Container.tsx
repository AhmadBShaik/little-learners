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
        "mx-auto w-full",
        large
          ? "max-w-[1820px] px-[min(var(--mobile-width),16px)] laptop:px-[min(var(--laptop-width),50px)]"
          : "max-w-[1596px] px-[min(var(--mobile-width),16px)] laptop:px-[min(var(--laptop-width),80px)] desktop:px-[min(var(--desktop-width),162px)]",
      )}
    >
      {children}
    </div>
  );
}

export default Container;
