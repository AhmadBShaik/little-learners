import { cn } from "@/helpers/utils";
import React from "react";

type GridProps = {
  className?: string;
  children: React.ReactNode;
};

function Grid({ children, className }: GridProps) {
  return <div className={cn("grid", className)}>{children}</div>;
}

export default Grid;
