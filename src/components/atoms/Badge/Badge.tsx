import React from "react";

type BadgeProps = { text: string };

function Badge({ text }: BadgeProps) {
  return (
    <div className="desktotp:px-[20px] desktotp:py-[10px] mb-[10px] w-fit rounded-lg border-2 border-black bg-white px-[14px] py-[8px] text-[14px] laptop:mb-[14px] laptop:text-[16px] desktop:mb-[19px] desktop:text-[18px]">
      {text}
    </div>
  );
}

export default Badge;
