export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 sm:top-2 sm:g-px">
      <nav className="flex py-4 g-px sm:px-4 justify-between items-center h-16 g-max-w g-bg1  border-b-2 border-orange-500 shadow-md sm:border-2">
        <h2 className="font-bold text-3xl tracking-wider g-text-c2">LOGO</h2>
        <button className="sm:hidden w-7 h-5 flex flex-col justify-between items-center">
          {Array(3)
            .fill()
            .map((v, i) => (
              <div key={i} className="g-bg3 w-full h-[2px]"></div>
            ))}
        </button>
        <ul className="hidden sm:flex space-x-4 font-semibold g-text-c4">
          <li>
            <a href="">TEAM</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">BLOG</a>
          </li>
          <li>
            <a href="">GALLERY</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
