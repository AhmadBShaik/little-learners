import Container from "@/components/atoms/Container";
import Logo from "@/components/atoms/Logo";
import NavItems from "@/components/molecules/NavItems";
import { outfit } from "@/fonts";
import { cn } from "@/helpers/utils";

type Props = {};

function Navbar({}: Props) {
  return (
    <Container large>
      <div
        className={cn(
          outfit.className,
          `flex w-full justify-between overflow-hidden rounded-xl border-2 border-secondary-15`,
        )}
      >
        <Logo />
        <NavItems />
      </div>
    </Container>
  );
}
export default Navbar;
