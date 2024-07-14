import Corner from "@/components/atoms/Corner";
import Line from "@/components/atoms/Line";
import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative aspect-[87/100] overflow-visible bg-primary-80 laptop:aspect-[93/100] desktop:aspect-square">
      <Line side="top" />
      <Line side="right" />
      <Line side="bottom" />
      <Line side="left" />
      <Corner placement="top-left" />
      <Corner placement="top-right" />
      <Corner placement="bottom-left" />
      <Corner placement="bottom-right" />
      <Image
        alt=""
        src={"/assets/hero.png"}
        fill
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-x-[37.5px] bottom-[52px] top-[50px] laptop:inset-x-[74px] laptop:bottom-[78px] laptop:top-[77px] desktop:inset-x-[103px] desktop:bottom-[89px] desktop:top-[88px]">
        <Image alt="" src={"/assets/abstract-spiral.png"} fill className="" />
      </div>
    </div>
  );
}

export default HeroImage;
