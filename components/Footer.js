export default function Footer() {
  return (
    <footer className="max-w-[150rem] mx-auto w-full bg-[#1c2c42] relative">
      <div className="w-full h-2/3 xl:h-60 2xl:h-64 bg-[#1c2c42] -skew-y-6 absolute -top-10 sm:-top-12 md:-top-14 lg:-top-20 xl:-top-24 2xl:-top-32 -z-10"></div>
      <div className="g-text-c4 g-px g-max-w py-4 text-center flex flex-col justify-between items-center space-y-4 h-full">
        <h3 className="font-bold text-3xl tracking-wider g-text-c2">LOGO</h3>
        <div className="w-full text-left flex justify-evenly">
          <div className="">
            <span className="text-lg font-bold g-text-c2">TEAM</span>
            <ul>
              <li>Mobile Legends</li>
              <li>PUBGM</li>
              <li>Point Blank</li>
              <li>Valorant</li>
            </ul>
          </div>
          <div className="">
            <span className="text-lg font-bold g-text-c2">UG - Esports</span>
            <ul>
              <li>News</li>
              <li>About</li>
              <li>Team</li>
              <li>Events</li>
              <li>Videos</li>
            </ul>
          </div>
          <div className="">
            <span className="text-lg font-bold g-text-c2">Social Media</span>
            <ul>
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Line</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-4">
          <hr className="border-gray-100 mb-2" />
          <span className="">
            © 2022, Gunadarma Esports. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
