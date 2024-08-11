import NavItem from "@/components/atoms/NavItem";
import NavMenu from "../NavMenu";

type Props = {};

function NavItems({}: Props) {
  const navItems = [
    { link: "/", name: "Home" },
    // { link: "/about-us", name: "About Us" },
    // { link: "/academics", name: "Academics" },
    // { link: "/admissions", name: "Admissions" },
    { link: "/student-life", name: "Student Life" },
    // { link: "/contact", name: "Contact" },
  ];
  return (
    <>
      <div className="hidden divide-x-2 divide-secondary-15 border-l-2 border-secondary-15 leading-[150%] laptop:block">
        {navItems.map((item, index) => (
          <NavItem
            href={item.link}
            className={
              index === navItems.length - 1
                ? "bg-primary-75 hover:bg-primary-70"
                : ""
            }
          >
            {item.name}
          </NavItem>
        ))}
      </div>
      <NavMenu items={navItems} />
    </>
  );
}

export default NavItems;
