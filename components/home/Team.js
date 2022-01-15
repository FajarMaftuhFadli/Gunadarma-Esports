import Image from "next/image";
import image1 from "../../images/image1.jpg";
import Section from "../Section";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Team() {
  return (
    <Section>
      <h2 className="g-h2 g-text-c2">TEAM</h2>
      <span className="mb-5 g-text-c4 text-lg">Meet Our Squads</span>
      <Slide />
      <div className="w-1/2 flex justify-between relative items-center mx-auto mt-5">
        <div
          className="!h-[0.1rem] !bg-gray-100/20 paginationTeam !relative 
        "
        ></div>
        {/* !ml-[0.15rem] !mr-10 */}
      </div>

      <span className="text-outline-only">TEAM</span>
    </Section>
  );
}

function Slide() {
  const SwiperConfig = {
    modules: [Pagination],
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    // centeredSlides: true,
    pagination: {
      el: ".paginationTeam",
      type: "progressbar",
      renderProgressbar: function (progressbarFillClass) {
        return `<span class="${progressbarFillClass} !bg-gray-100"></span>`;
      },
    },
    className: "-skew-x-6 !mx-4 sm:!mx-8 md:!mx-12",
    // freeMode: {
    //   enabled: true,
    //   sticky: true,
    // },
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log("slide change")}
    // breakpoints: {
    //   640: {
    //     // slidesPerView: 3,
    //     // spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 10,
    //   },
    // },
  };

  return (
    <Swiper {...SwiperConfig}>
      {Array(5)
        .fill()
        .map((v, i) => (
          <SwiperSlide
            key={i}
            className="g-text-c4 mt-5 !w-48 sm:!w-52 md:!w-56 lg:!w-60 xl:!w-64"
          >
            <div className="group overflow-hidden h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96 hover:transalate-x-[0.20rem] hover:-translate-y-5 transition-transform delay-75">
              <div className="relative w-full h-full trans-gray grayscale group-hover:grayscale-0 after:bg-black/30 after:group-hover:bg-transparent after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-colors">
                <Image
                  src={image1}
                  layout="fill"
                  objectFit="cover"
                  priority
                  alt="test"
                  className=""
                />
              </div>
              <div className="text-center mb-5 max-w-xs z-10 absolute left-0 right-0 bottom-0 md:translate-y-16 md:group-hover:translate-y-0 md:transition-transform delay-75">
                <h3 className="font-bold text-xl drop-shadow-lg mb-2">
                  GAME {i + 1}
                </h3>
                <button id="viewTeam" className="btn-orange delay-75">
                  VIEW TEAM
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
