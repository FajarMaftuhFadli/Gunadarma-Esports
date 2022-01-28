import { useState, useEffect, useCallback } from "react";

/**
 * This function renders the header of the website.
 * @returns The header component.
 */
export default function Header() {
  const [showNav, setshowNav] = useState(false);

  const link = ["NEWS", "ABOUT", "TEAM", "EVENTS", "VIDEOS", "CONTACT"];

  return (
    <header className="z-10 w-full fixed top-0 sm:top-2 sm:px-4">
      <nav className="flex py-4 g-px sm:px-4 justify-between items-center h-16 w-full max-w-6xl mx-auto g-bg1 border-b-2 border-orange-500 shadow-md sm:border-2">
        <h2 className="font-bold text-3xl tracking-wider g-text-c2">LOGO</h2>
        <button
          className="sm:hidden w-7 h-5 flex flex-col justify-between items-center group"
          onClick={() => setshowNav(!showNav)}
        >
          {Array(3)
            .fill()
            .map((v, i) => (
              <div
                key={i}
                className="g-bg4 w-full h-[2px] group-hover:g-bg3 transition-colors"
              ></div>
            ))}
        </button>
        <ul className="hidden sm:flex space-x-4 font-semibold g-text-c4">
          {link.map((v, i) => (
            <li key={i}>
              <a className=" hover:g-text-c3" href={`/#${v}`}>
                {v}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {showNav ? <MobileNav setshowNav={setshowNav} link={link} /> : ""}
    </header>
  );
}

/**
 * It's a mobile navigation bar that appears when you click on the hamburger icon.
 * @returns A function that returns a component.
 */
function MobileNav({ setshowNav, link }) {
  const hide = useCallback(() => {
    setshowNav(false);
  }, [setshowNav]);

  const willHide = () => {
    setanim({
      right: "-right-64",
      color: "bg-gray-900/0",
    });
    setTimeout(hide, 200);
  };

  const [anim, setanim] = useState({
    right: "-right-64",
    color: "bg-gray-900/0",
  });

  useEffect(() => {
    setanim({
      right: "right-0",
      color: "bg-gray-900/95",
    });
  }, []);

  return (
    <div
      className={`sm:hidden fixed top-0 bottom-0 left-0 right-0 -za-20 transition-colors delay-100 ${anim.color}`}
    >
      <div
        className="absolute top-0 bottom-0 left-0 right-0"
        onClick={willHide}
      ></div>
      <nav
        className={`pt-16 g-bg1 absolute top-0 h-full w-64 g-text-c4 text-right text-xl z-10 transition-position delay-100 ${anim.right}`}
      >
        <div className="absolute right-0 top-0 h-16 z-40 p-4 flex justify-center items-center">
          <button
            onClick={willHide}
            className="w-7 h-5 flex flex-col justify-center items-center group"
          >
            <div className="w-full h-[2px] g-bg4 group-hover:g-bg3 transition-colors rotate-45 translate-y-[0.05rem]"></div>
            <div className="w-full h-[2px] g-bg4 group-hover:g-bg3 transition-colors -rotate-45 -translate-y-[0.05rem]"></div>
          </button>
        </div>
        <ul className="">
          {link.map((v, i) => (
            <li key={i} className="py-4 px-8 border-t-[1px] hover:g-text-c3">
              <a href={`/#${v}`} onClick={willHide}>
                {v}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
