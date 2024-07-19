import NavItem from "@/components/atoms/NavItem";
import Menu from "@/icons/Menu";

type Props = {};

function NavItems({}: Props) {
  const navItems = [
    { link: "/", name: "Home" },
    { link: "/about-us", name: "About Us" },
    { link: "/academics", name: "Academics" },
    { link: "/admissions", name: "Admissions" },
    { link: "/student-life", name: "Student Life" },
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
      <div className="bg-primary-95 px-[30px] py-[17px] laptop:hidden">
        <Menu />
      </div>
    </>
  );
}

export default NavItems;
