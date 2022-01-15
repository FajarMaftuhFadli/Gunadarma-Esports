import Section from "../Section";
import Chevron_double_right from "./Chevron_double_right";
import Image from "next/image";

import image1 from "../../images/image1.jpg";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function News() {
  return (
    <Section>
      <div className="flex justify-between items-center w-full">
        <h2 className="g-h2 g-text-c2 mb-5">NEWS</h2>
        <div className="g-text-c3 items-center flex group">
          <a className="font-semibold g-text-c3" href="">
            SEE ALL
          </a>
          <Chevron_double_right />
        </div>
      </div>

      <Slide />

      <div className="w-full flex justify-between relative items-center">
        <div className="!h-[0.1rem] !bg-gray-100/20 pagination !relative !ml-[0.15rem] !mr-10"></div>
        <div className="flex mr-[0.26rem] space-x-1">
          <button className="swiper-btn-prev">
            <Arrow />
          </button>
          <button className="swiper-btn-next">
            <Arrow isLeft={false} />
          </button>
        </div>
      </div>

      <span className="text-outline-only">NEWS</span>
    </Section>
  );
}

function Slide() {
  const SwiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
      disabledClass: "swiper-btn-disabled",
    },
    pagination: {
      el: ".pagination",
      type: "progressbar",
      renderProgressbar: function (progressbarFillClass) {
        return `<span class="${progressbarFillClass} !bg-gray-100"></span>`;
      },
    },
    className: "",
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log("slide change")}
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
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
            className="g-text-c4 flex flex-col space-y-2 mb-5 sm:m-0 cursor-pointer"
          >
            <div className="relative w-full h-64 group hover-slide before:g-bg2 before:opacity-40 before:z-10 before:-left-7 before:-right-7">
              <Image
                src={image1}
                layout="fill"
                objectFit="cover"
                priority
                className="group-hover:scale-110 transition-transform duration-700 ease-out"
                alt="test"
              />
              <div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  opacity-0 btn-orange tracking-wide">
                READ
              </div>
            </div>
            <span>12/12/2021</span>
            <h3 className="text-2xl font-semibold">
              Lorem ipsum dolor sit amet
            </h3>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

function Arrow({ isLeft = true, className }) {
  className = "g-text-c1 skew-x-12 h-10 w-10";
  return isLeft ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
