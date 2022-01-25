import Image from "next/image";
import Section from "../Section";
import Chevron_double_right from "./Chevron_double_right";

import image1 from "../../images/image1.jpg";
import Anchor from "../Anchor";

export default function About() {
  return (
    <Section>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-8">
        <div className="flex flex-col space-y-3 md:w-1/2">
          <h2 className="g-h2 g-text-c2">ABOUT US</h2>
          <p className="g-text-c4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero illo
            possimus non, nostrum voluptatum architecto at quaerat, cupiditate
            minus eaque odio fugit aliquam dolore labore molestias accusamus
            ipsa, facere quidem?
          </p>
          {/* <button className="border-2 w-32 border-orange-500 g-text-c3 p-2 px-3 font-semibold tracking-wider hover-slide before:-left-2">
          READ MORE
        </button> */}
          <div className="g-text-c3 flex items-center group">
            <a href="" className="font-semibold g-text-c3">
              Read more
            </a>
            <Chevron_double_right />
          </div>
        </div>
        <div className="relative h-64 w-full md:w-1/2">
          <Image
            src={image1}
            layout="fill"
            objectFit="cover"
            priority
            className=""
            alt="test"
          />
        </div>
      </div>

      <span className="text-outline-only">
        ABOUT
        <br />
        US
      </span>

      <Anchor id="ABOUT" />
    </Section>
  );
}
