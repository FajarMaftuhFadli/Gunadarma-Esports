export default function Header() {
  return (
    <header className="g-bg1 fixed top-0 w-full z-10 border-b-2 border-orange-500 shadow-md">
      <nav className="flex py-4 g-px justify-between items-center h-16 g-max-w">
        <h2 className="font-bold text-3xl tracking-wider g-txt-c2">LOGO</h2>
        <button className="sm:hidden w-7 h-5 flex flex-col justify-between items-center">
          {Array(3)
            .fill()
            .map((v, i) => (
              <div key={i} className="g-bg3 w-full h-[2px]"></div>
            ))}
        </button>
        <ul className="hidden sm:flex space-x-4 font-semibold g-txt-c1">
          <li>TEAM</li>
          <li>ABOUT</li>
          <li>BLOG</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
