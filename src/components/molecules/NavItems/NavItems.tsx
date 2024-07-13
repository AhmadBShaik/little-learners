import Logo from "@/components/atoms/Logo";
import NavItem from "@/components/atoms/NavItem";
import Menu from "@/icons/Menu";
import React from "react";

type Props = {};

function NavItems({}: Props) {
  const navItems = [{ href: "/", children: "Home" }];
  return (
    <>
      <div className="hidden divide-x-2 divide-secondary-15 border-l-2 border-secondary-15 leading-[150%] laptop:block">
        <NavItem href={"/"}>Home</NavItem>
        <NavItem href={"/about-us"}>About Us</NavItem>
        <NavItem href={"/academics"}>Academics</NavItem>
        <NavItem href={"/admissions"}>Admissions</NavItem>
        <NavItem href={"/student-life"}>Student Life</NavItem>
        <NavItem
          href={"/contact"}
          className="bg-primary-75 hover:bg-primary-70"
        >
          Contact
        </NavItem>
      </div>
      <div className="bg-primary-95 px-[30px] py-[17px] laptop:hidden">
        <Menu />
      </div>
    </>
  );
}

export default NavItems;
