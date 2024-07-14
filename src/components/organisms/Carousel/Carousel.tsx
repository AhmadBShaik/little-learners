"use client";
import "swiper/css";
import { MobileView } from "./MobileView";
import { LaptopView } from "./LaptopView";

export type Testimonial = {
  id: string;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  review: string;
};

function TestimonialsCarousel() {
  return (
    <div className="w-full">
      <MobileView />
      <LaptopView />
    </div>
  );
}

export default TestimonialsCarousel;
