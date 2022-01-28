import Section from "../Section";
import Chevron_double_right from "./Chevron_double_right";
import Image from "next/image";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Anchor from "../Anchor";

import moment from "moment";

import { useState, useCallback } from "react";
import BlockContent from "@sanity/block-content-to-react";

export default function News({ data }) {
  const [contents, setcontents] = useState({ isShow: false, index: 0 });

  // const serializers = {
  //   types: {
  //     figure: (props) => (
  //       <pre data-language={props.node.language}>
  //         <code>{props.node.code}</code>
  //       </pre>
  //     ),
  //   },
  // };

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

      <Slide data={data} setcontents={setcontents} />

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
      <Anchor id="NEWS" />
      {contents.isShow ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900/95 z-[100] px-4 flex flex-col items-center justify-center">
          <div
            onClick={() => setcontents({ isShow: false, index: 0 })}
            className="absolute top-0 left-0 right-0 bottom-0 -z-10"
          ></div>
          <div className="w-full lg:max-w-6xl md:max-w-2xl bg-[#1c2c42] flex flex-col items-end">
            <button
              onClick={() => setcontents({ isShow: false, index: 0 })}
              className="w-5 h-3 flex flex-col justify-center items-center group m-3"
            >
              <div className="w-full h-[2px] bg-slate-500 group-hover:g-bg3 transition-colors rotate-45 translate-y-[0.05rem]"></div>
              <div className="w-full h-[2px] bg-slate-500 group-hover:g-bg3 transition-colors -rotate-45 -translate-y-[0.05rem]"></div>
            </button>
            <div className="g-text-c4 h-[70vh] lg:h-[25rem] w-full overflow-y-auto lg:overflow-y-visible border-t-2 border-slate-700 p-4 lg:flex lg:space-x-4">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full lg:w-1/2 mb-4 lg:mb-0">
                <Image
                  src={data[contents.index].image.url}
                  layout="fill"
                  objectFit="cover"
                  alt={data[contents.index].image.alt}
                />
              </div>
              <div className="lg:w-1/2 lg:overflow-y-auto">
                <h3 className="text-2xl font-semibold mb-4">
                  {data[contents.index].title}
                </h3>
                <div>
                  <BlockContent blocks={data[contents.index].body} />
                  {console.log(data[contents.index].body)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Section>
  );
}

function Slide({ data, setcontents }) {
  // const [index, setindex] = useState(0);
  // const showContent = useCallback(() => {
  //   setcontents({ isShow: true, index: index });
  // }, [setcontents]);

  const ShowContent = (i) =>
    useCallback(() => {
      setcontents({ isShow: true, index: i });
    }, [i, setcontents]);

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
      {data.map((v, i) => (
        <SwiperSlide
          key={i}
          className="g-text-c4 flex flex-col space-y-2 mb-5 cursor-pointer"
          onClick={ShowContent(i)}
        >
          <div className="relative w-full h-64 group hover-slide before:g-bg2 before:opacity-40 before:z-10 before:-left-7 before:-right-7">
            <Image
              src={v.image.url}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-700 ease-out"
              alt={v.image.alt}
            />
            <div className="z-20 px-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  opacity-0 btn-orange tracking-wide">
              READ
            </div>
          </div>
          <span>{moment(v.date).format("MMMM DD YYYY")}</span>
          <h3 className="text-2xl font-semibold">{v.title}</h3>
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
