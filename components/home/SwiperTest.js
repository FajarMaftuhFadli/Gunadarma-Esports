import Image from "next/image";
import image1 from "../../images/image1.jpg";

import { Navigation, Pagination, A11y, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, EffectFade]}
      //       spaceBetween={50}
      effect={"fade"}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className=""
    >
      {Array(5)
        .fill()
        .map((v, i) => (
          <SwiperSlide className="bg-indigo-400 relative">
            <Image src={image1} alt="test" />
            <p className="absolute bottom-5 left-5 font-bold text-4xl text-white">
              Image {++i}
            </p>
          </SwiperSlide>
        ))}
      ...
    </Swiper>
  );
};
