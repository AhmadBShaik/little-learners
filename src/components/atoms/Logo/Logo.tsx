import Image from "next/image";
import React from "react";
import NavItem from "../NavItem";
import Link from "next/link";

type Props = {};

function Logo({}: Props) {
  return (
    <div className="w-full max-w-[178px] bg-primary-65 px-[20px] py-[16px] laptop:max-w-[230px] desktop:px-[24px] desktop:py-[20px]">
      <Link href="/" className="relative inline-block h-full w-full">
        <Image src={"/assets/logo.svg"} fill alt="object-cover" />
      </Link>
    </div>
  );
}

export default Logo;
