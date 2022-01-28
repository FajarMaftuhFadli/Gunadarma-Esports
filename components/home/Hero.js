import Image from "next/image";
import hero_image from "../../images/hero_image.png";
import ArrowDownAnim from "./ArrowDownAnim";

/**
 * This is the hero section of the website.
 * @returns A section with an image and a text.
 */
export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[25rem] md:h-[27rem] lg:h-[29rem] xl:h-[33rem]">
        <Image
          src={hero_image}
          layout="fill"
          objectFit="cover"
          priority
          alt="test"
        />
      </div>
      <div className="absolute top-0 flex flex-col justify-end items-center h-full w-full text-center g-text-c4 g-px bg-blue-900/20">
        <div className="absolute top-[25%]">
          <h1 className="g-h1 drop-shadow-md">
            GUNADARMA
            <br />
            ESPORTS
          </h1>
          {/* <span className="font-semibold drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            accusamus
          </span> */}
        </div>
        <ArrowDownAnim />
        <div className="absolute -bottom-2 w-full h-12 flex justify-center items-center g-px">
          <div className="relative h-full">
            <div className="w-screen h-full absolute right-0 -translate-x-3 g-bg1 skew-x-[40deg]"></div>
          </div>
          <div className="w-full h-full g-max-w mx-0"></div>
          <div className="relative h-full">
            <div className="w-screen h-full absolute left-0 translate-x-3 g-bg1 -skew-x-[40deg]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
