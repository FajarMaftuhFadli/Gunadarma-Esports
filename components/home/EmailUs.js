export default function EmailUs() {
  return (
    <div className="h-32 w-full">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-72">
        <div className="relative w-full h-full flex flex-col justify-center items-center before:absolute before:top-0 before:bg-[#1c2c42] before:h-full before:w-full before:-skew-y-6 before:border-8 before:border-[#0e1420]">
          <span className="z-0 g-text-c4 text-xl">For Business Inquiries</span>
          <a
            href="mailto:gunadarmaesports@gmail.com"
            className="z-0 g-bg4 text-xl p-2 ring-2 ring-gray-200 hover:g-bg3 font-semibold hover:g-text-c4 g-text-c1 mt-6 md:opacity-100 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            EMAIL US
          </a>
        </div>
      </div>
    </div>
  );
}
