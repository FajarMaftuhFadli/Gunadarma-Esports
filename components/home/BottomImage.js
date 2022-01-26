import Image from "next/image";
import bimage from "../../images/bottom_image.jpg";

export default function BottomImage() {
  return (
    <div className="-mt-10 md:-mt-14 lg:-mt-20 2xl:-mt-32 relative w-full h-[23rem] sm:h-[24rem] md:h-[27rem] lg:h-[30rem] xl:h-[33rem] 2xl:h-[37rem] -skew-y-6 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-[#0e1420] before:to-[#0e142055] before:z-10">
      <div className="skew-y-6 w-full absolute -bottom-10 -top-10 md:-bottom-14 lg:-bottom-20 2xl:-bottom-32">
        <div className="relative h-full w-full">
          <Image
            src={bimage}
            layout="fill"
            objectFit="cover"
            priority
            alt="test"
          />
        </div>
      </div>
    </div>
  );
}
