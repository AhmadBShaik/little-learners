import Link from "next/link";
import React from "react";
import type { LinkProps } from "next/link";
import { cn } from "@/helpers/utils";

interface NavItemProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}
function NavItem({ className, children, ...props }: NavItemProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-block px-[30px] py-[21px] text-sm font-medium hover:bg-primary-95 laptop:px-[30px] laptop:py-[21px] laptop:text-base desktop:px-[34px] desktop:py-[25px] desktop:text-xl",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export default NavItem;
