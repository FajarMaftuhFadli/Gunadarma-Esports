import Anchor from "../Anchor";
import Discord from "../social-icons/Discord";
import Instagram from "../social-icons/Instagram";
import Line from "../social-icons/Line";
import Youtube from "../social-icons/Youtube";

/**
 * It creates a list of social media icons.
 * @returns The <section> element.
 */
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

  var className =
    "fill-gray-200 hover:fill-orange-500 transition-colors md:w-12 md:h-12 lg:w-14 lg:h-14";

  return (
    <section className="w-full relative z-10">
      <div className="bg-[#1c2c42] p-8 pb-10 md:py-14 lg:py-16 flex flex-col items-center">
        <span className="text-outline text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-transparent leading-none mb-6">
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
