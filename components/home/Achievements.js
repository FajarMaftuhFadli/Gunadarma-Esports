import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Showcase() {
  return (
    <Section>
      <h2 className="g-h2 g-text-c2 text-center">ACHIEVEMENTS</h2>
      <Slide />
    </Section>
  );
}

function Slide() {
  const SwiperConfig = {
    spaceBetween: 20,
    slidesPerView: 2,
    grabCursor: true,
    className: "mt-10",
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <Swiper {...SwiperConfig}>
      {Array(5)
        .fill()
        .map((v, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col items-center text-center g-text-c4"
          >
            <div
              key={i}
              className="w-28 h-28 bg-red-400 rounded-full mb-3"
            ></div>
            <h3 className="font-semibold uppercase">Lorem ipsum 2021</h3>
            <span>1st place</span>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
