import Section from "../Section";
import Chevron_double_right from "./Chevron_double_right";

import Image from "next/image";
import logo_MLBB from "../../images/game-logo/MLBB.svg";

export default function Events() {
  return (
    <Section>
      <h2 className="g-h2 g-text-c2 mb-5">EVENTS</h2>
      <div className="flex flex-col items-center justify-center space-y-2 mb-3">
        {Array(4)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="g-text-c4 ring-1 ring-slate-800 hover:ring-orange-500 w-full flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0 sm:space-x-5 p-4 hover-slide before:-left-5"
            >
              <div>
                <div className="flex space-x-1">
                  <div className="w-5 flex-none">
                    <Image src={logo_MLBB} priority />
                  </div>
                  <span className="font-semibold">MOBILE LEGEND</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 sm:bd-0">
                  Tournament Lorem ipsum dolor sit Lorem ipsum dolor sit {++i}
                </h3>
                <div>
                  <span className="sm:hidden">12 DESEMBER - 18:00</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="hidden sm:block">
                  12 DESEMBER
                  <br />
                  18:00
                </span>
              </div>
              {/* <div className="flex items-center space-x-4 h-12">
                <div className="h-full w-12 bg-white/0 flex items-center">
                  <Image src={logo_MLBB} priority />
                </div>
                <div className="h-full w-full overflow-hidden">
                  <span className="font-bold">Mobile Legend</span>
                  <h4 className="">
                    Tournament Lorem Ipsum a a aas das ds as{++i} asdsad ada sd
                    a
                  </h4>
                </div>
              </div> */}
              {/* <span className="z-10">1{i} Des, 2021</span> */}
              {/* <div className="absolute -right-2 h-full -skew-x-12 flex">
                <div className="h-full bg-gradient-to-l from-[#0e1420] w-6 opacity-0"></div>
                <div className="bg-slate-700 p-2 h-full w-20 flex items-center justify-center opacity-0">
                  <div className="relative h-10 w-10 skew-x-12">
                    <Image
                      src={logo_MLBB}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>
                <div className="g-bg3 h-full w-32"></div>
              </div> */}
            </div>
          ))}
      </div>
      <div className="g-text-c3 flex items-center group">
        <a href="" className="font-semibold g-text-c3">
          SEE ALL
        </a>
        <Chevron_double_right />
      </div>
      <span className="text-outline-only">EVENTS</span>
    </Section>
  );
}
