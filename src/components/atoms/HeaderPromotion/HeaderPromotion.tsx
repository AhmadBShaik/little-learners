import { cn } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

function HeaderPromotion() {
  return (
    <Container large>
      <div
        className={cn(
          "sticky mt-10 overflow-hidden rounded-xl border-2 border-secondary-15 text-sm font-medium laptop:mt-4 laptop:text-base desktop:top-[18px] desktop:text-xl",
        )}
      >
        <div className="relative flex w-full items-center justify-center py-[12px] desktop:py-[14px]">
          <div className="absolute inset-0 -left-[9px] -top-[2px] size-[50px] laptop:-top-[71px] laptop:size-[180px] desktop:-top-[131px] desktop:size-[244px]">
            <Image src={"/assets/abstract-square.svg"} alt={""} fill />
          </div>
          <div className="absolute inset-0 -top-[2px] left-auto size-[50px] laptop:-top-[71px] laptop:size-[180px] desktop:-top-[131px] desktop:size-[244px]">
            <Image src={"/assets/abstract-square.svg"} alt={""} fill />
          </div>
          <div className="absolute inset-0 -top-[11px] left-[4px] size-[32px] laptop:-top-[25px] laptop:left-[25%] laptop:size-[50px] desktop:-top-[28px] desktop:size-[72px]">
            <Image src={"/assets/abstract-sphere.svg"} alt={""} fill />
          </div>

          <div className="absolute -bottom-[30px] -right-[18px] size-[50px] laptop:-bottom-[15px] laptop:right-[25%] laptop:size-[30px] desktop:-bottom-[10px] desktop:size-[40px]">
            <Image src={"/assets/abstract-sphere.svg"} alt={""} fill />
          </div>
          <Link
            href={"/admissions"}
            className="flex gap-2.5 text-center laptop:gap-3.5"
          >
            <span className="">Admission is Open, Grab your seat now</span>
            <span className="hidden aspect-square max-w-5 sm:block laptop:max-w-6 desktop:max-w-[30px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 15C5 14.3787 5.50368 13.875 6.125 13.875L22.0819 13.875L15.8453 7.93593C15.3974 7.50529 15.3834 6.79312 15.8141 6.34525C16.2447 5.89738 16.9569 5.88342 17.4047 6.31406L25.6547 14.1891C25.8753 14.4012 26 14.694 26 15C26 15.306 25.8753 15.5988 25.6547 15.8109L17.4047 23.6859C16.9569 24.1166 16.2447 24.1026 15.8141 23.6547C15.3834 23.2069 15.3974 22.4947 15.8453 22.0641L22.0819 16.125L6.125 16.125C5.50368 16.125 5 15.6213 5 15Z"
                  fill="#262626"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default HeaderPromotion;
