import React from "react";
import Navbar from "../Navbar";
import HeaderPromotion from "@/components/atoms/HeaderPromotion";
import { cn } from "@/helpers/utils";
import { outfit } from "@/fonts";

function Header() {
  return (
    <React.Fragment>
      <HeaderPromotion />

      <div
        className={cn(
          "sticky left-0 right-0 top-0 z-10 mt-3.5 bg-primary-97 pt-2",
        )}
      >
        <Navbar />
      </div>
    </React.Fragment>
  );
}

export default Header;
