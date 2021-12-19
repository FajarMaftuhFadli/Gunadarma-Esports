export default function UpcomingEvent() {
  return (
    <section className="g-px g-max-w g-txt-c1 pb-1">
      <h2 className="g-h2 g-txt-c2 mb-5">EVENT</h2>
      <div className="flex flex-col items-center justify-center space-y-2 mb-3">
        {Array(4)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="ring-1 ring-slate-800 hover:ring-orange-500 w-full flex justify-between items-center overflow-hidden relative h-20 px-3"
            >
              <div className="">
                <span className="font-bold">Mobile Legend</span>
                <h4 className="">
                  Tournament Lorem Ipsum a a aas das ds as{++i}
                </h4>
              </div>
              <span className="z-10">1{i} Des, 2021</span>
              <div className="absolute -right-2 h-full -skew-x-12 flex">
                <div className="h-full bg-gradient-to-l from-[#0e1420] w-6"></div>
                <div className="bg-slate-800 p-2 h-full w-20 flex items-center justify-center">
                  <div className="w-5 h-5 bg-white skew-x-12"></div>
                </div>
                <div className="g-bg3 h-full w-32"></div>
              </div>
            </div>
          ))}
      </div>
      <a href="" className="font-semibold g-txt-c3">
        VIEW MORE {`> >`}
      </a>
    </section>
  );
}
