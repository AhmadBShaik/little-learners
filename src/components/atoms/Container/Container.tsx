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
          ? "max-w-[1820px] px-[min(var(--mobile-width),16px)] laptop:max-w-[1836px] laptop:px-[min(var(--laptop-width),50px)] desktop:max-w-[1870px]"
          : "max-w-[1596px] px-[min(var(--mobile-width),16px)] laptop:max-w-[1676px] laptop:px-[min(var(--laptop-width),80px)] desktop:max-w-[1758px] desktop:px-[min(var(--desktop-width),162px)]",
      )}
    >
      {children}
    </div>
  );
}

export default Container;
