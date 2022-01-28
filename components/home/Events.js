import Section from "../Section";
import Chevron_double_right from "./Chevron_double_right";

import Image from "next/image";
import logo_MLBB from "../../images/game-logo/MLBB.svg";
import Anchor from "../Anchor";

/**
 * This function is used to display the events section.
 * @returns The return value of the function is the return value of the last expression in the function
 * body.
 */
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
                    <Image src={logo_MLBB} priority alt="test" />
                  </div>
                  <span className="font-semibold">MOBILE LEGEND</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 sm:bd-0">
                  Tournament Mahasiswa Nasional {++i}
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
      <Anchor id="EVENTS" />
    </Section>
  );
}
