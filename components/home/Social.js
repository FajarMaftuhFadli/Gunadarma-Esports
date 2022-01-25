import Anchor from "../Anchor";
import Discord from "../social-icons/Discord";
import Instagram from "../social-icons/Instagram";
import Line from "../social-icons/Line";
import Youtube from "../social-icons/Youtube";

export default function Social() {
  var social = [
    {
      url: "https://www.youtube.com/channel/UCl4-RGEW0A9BV9bTR8sjfLA",
      el: ({ className }) => <Youtube className={className} />,
    },
    {
      url: "https://www.instagram.com/gunadarma.esports/",
      el: ({ className }) => <Instagram className={className} />,
    },
    {
      url: "https://line.me/ti/p/pWsfiNWFnf",
      el: ({ className }) => <Line className={className} />,
    },
    {
      url: "https://discord.com/invite/ZEfxCbyTYt?",
      el: ({ className }) => <Discord className={className} />,
    },
  ];

  var className = "fill-gray-200 hover:fill-orange-500 transition-colors";

  return (
    <section className="w-full relative">
      <div className="bg-[#1c2c42] p-8 pb-10 flex flex-col items-center">
        <span className="text-outline text-[3rem] font-black text-transparent leading-none mb-6">
          FOLLOW US
        </span>
        <div className="w-full">
          <ol className="flex justify-center space-x-4">
            {social.map((v, i) => (
              <li key={i}>
                <a href={v.url} target="_blank" rel="noreferrer">
                  {v.el({ className })}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Anchor id="CONTACT" />
    </section>
  );
}
