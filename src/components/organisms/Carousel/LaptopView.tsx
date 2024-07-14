import CarouselButton from "@/components/atoms/CarouselButton";
import { useRef } from "react";
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

export const LaptopView = () => {
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
    <div className="hidden items-center laptop:flex laptop:gap-[20px] desktop:gap-[25px]">
      <CarouselButton type="previous" ref={prevRef} onClick={onPreviousClick} />

      <div className="relative flex-1 overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={3}
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
              <div className="py-2.5 laptop:px-[20px] desktop:px-[25px]">
                <CarouselCard testimonial={testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <CarouselButton type="next" ref={nextRef} onClick={onNextClick} />
    </div>
  );
};
