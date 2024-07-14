import { cn } from "@/helpers/utils";
import React from "react";

type LineProps = {
  side: "top" | "right" | "bottom" | "left";
};

function Line({ side }: LineProps) {
  const sideClassName = {
    top: "-top-1 bottom-auto left-0 right-0 h-3",
    right: "-right-1.5 left-auto w-3 pl-1.5 pr-1",
    bottom: "-bottom-1 top-auto left-0 right-0 h-3",
    left: "-left-1.5 right-auto w-3 pl-1.5 pr-1",
  };

  const sideInnerClassName = {
    top: "top-1 bottom-1.5",
    right: "left-1.5 right-1",
    bottom: "top-1 bottom-1.5",
    left: "left-1.5 right-1",
  };

  return (
    <div
      className={cn("absolute inset-0 z-10 bg-primary-80", sideClassName[side])}
    >
      <div
        className={cn("absolute inset-0 bg-black", sideInnerClassName[side])}
      />
    </div>
  );
}

export default Line;
