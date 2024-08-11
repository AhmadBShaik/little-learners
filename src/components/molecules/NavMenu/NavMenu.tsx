"use client";
import Menu from "@/icons/Menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

type NavMenuProps = {
  items: Array<{ link: string; name: string }>;
};
const NavMenu = ({ items }: NavMenuProps) => {
  const router = useRouter();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="bg-primary-95 px-[30px] py-[17px] laptop:hidden"
          aria-label="Customise options"
        >
          <Menu />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-20 rounded-md bg-primary-95 p-5 shadow-md"
          align={"end"}
        >
          {items.map((item) => (
            <DropdownMenu.Item
              className="px-2.5 py-1"
              onClick={() => {
                router.push(item.link);
              }}
              key={item.name}
            >
              {item.name}
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow className="" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default NavMenu;
