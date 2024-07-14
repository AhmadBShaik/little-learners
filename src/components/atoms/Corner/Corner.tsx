import { cn } from "@/helpers/utils";
import React from "react";

type CornerProps = {
  placement: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

function Corner({ placement }: CornerProps) {
  const topLeft = "-left-[10px] -top-[7px]";
  const topRight = "-right-[5px] -top-[8px]";
  const bottomLeft = "-left-[5px] -bottom-[7px]";
  const bottomRight = "-right-[5.15px] -bottom-[3px]";

  const cornerClassName = {
    "top-left": topLeft,
    "top-right": topRight,
    "bottom-left": bottomLeft,
    "bottom-right": bottomRight,
  };

  return (
    <div
      className={cn(
        `absolute z-20 size-5 rounded-full bg-white ring-2 ring-black ring-offset-2`,
        cornerClassName[placement],
      )}
    />
  );
}

export default Corner;
