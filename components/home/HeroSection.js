import Image from "next/image";
import bg_image from "../../images/bg-image1.png";
import ScrollDown from "./ScrollDown";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[30rem]">
        <Image src={bg_image} layout="fill" objectFit="cover" priority />
      </div>
      {/* <div className="absolute top-0 bg-gradient-to-t from-[#0e1420] via-[#0e1420aa] to-[#0e1420] via h-[31rem] opacity-100 w-full -mt-16"></div> */}
      <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full text-center text-gray-100 g-px bg-slate-800/30">
        <h1 className="g-h1 g-px mb-4 drop-shadow-md">GUNADARMA ESPORTS</h1>
        <span className="mb-10 font-semibold after:g-bg1 after:w-28 after:h-10 after:absolute after:bottom-0 after:-left-[5.3rem] after:rotate-45 before:w-28 before:h-10 before:absolute before:bottom-0 before:-right-[5.3rem] before:-rotate-45 before:g-bg1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          accusamus
        </span>
        {/* <a
          href="#testa"
          className="border-2 border-gray-100 text-gray-100 p-1 px-2 animate-bounce"
        >
          FEED
        </a> */}
        <ScrollDown />
      </div>
      {/* <div className="g-bg2 h-96 flex flex-col justify-center items-center space-y-6 ">
    </div> */}
    </section>
  );
}
