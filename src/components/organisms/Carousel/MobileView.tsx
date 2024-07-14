import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { testimonials } from "./testimonials";
import { CarouselCard } from "./CarouselCard";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { useRef } from "react";
import CarouselButton from "@/components/atoms/CarouselButton";

export const MobileView = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);
  const onPreviousClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const onNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-full laptop:hidden">
      <div className="flex items-center laptop:gap-[20px] desktop:gap-[25px]">
        <div className="relative flex-1 overflow-hidden">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            loop
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
              swiper.navigation.prevEl =
                prevRef.current as unknown as HTMLElement;
              swiper.navigation.nextEl =
                nextRef.current as unknown as HTMLElement;
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="px-[20px] py-2.5">
                  <CarouselCard testimonial={testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <CarouselButton
          type="previous"
          ref={prevRef}
          onClick={onPreviousClick}
        />
        <CarouselButton type="next" ref={nextRef} onClick={onNextClick} />
      </div>
    </div>
  );
};
