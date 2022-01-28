import Image from "next/image";
import Section from "../Section";
import Chevron_double_right from "./Chevron_double_right";

import image1 from "../../images/image-about.jpg";
import Anchor from "../Anchor";

import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [show, setshow] = useState(false);

  return (
    <Section>
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-8">
        <div className="flex flex-col space-y-3 md:w-1/2">
          <h2 className="g-h2 g-text-c2">ABOUT US</h2>
          <p className="g-text-c4 leading-relaxed">
            Gunadarma Esports terbentuk pada tanggal 7 Oktober 2019 yang
            dibentuk oleh Islamiati Nita Hidayat (Sastra Inggris). Pada awalnya
            Gunadarma Esports hanyalah sebuah komunitas kecil yang baru
            terbentuk di Universitas Gunadarma.
          </p>
          {/* <button className="border-2 w-32 border-orange-500 g-text-c3 p-2 px-3 font-semibold tracking-wider hover-slide before:-left-2">
          READ MORE
        </button> */}
          <div className="g-text-c3 flex items-center group">
            <button
              onClick={() => setshow(true)}
              className="font-semibold g-text-c3"
            >
              Read more
            </button>
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

      {show ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900/95 z-[100] px-4 flex flex-col items-center justify-center">
          <div
            onClick={() => setshow(false)}
            className="absolute top-0 left-0 right-0 bottom-0 -z-10"
          ></div>
          <div className="w-full md:max-w-2xl bg-[#1c2c42] flex flex-col items-end">
            <button
              onClick={() => setshow(false)}
              className="w-5 h-3 flex flex-col justify-center items-center group m-3"
            >
              <div className="w-full h-[2px] bg-slate-500 group-hover:g-bg3 transition-colors rotate-45 translate-y-[0.05rem]"></div>
              <div className="w-full h-[2px] bg-slate-500 group-hover:g-bg3 transition-colors -rotate-45 -translate-y-[0.05rem]"></div>
            </button>
            <div className="g-text-c4 w-full border-t-2 border-slate-700 p-4">
              <p>
                Gunadarma Esports terbentuk pada tanggal 7 Oktober 2019 yang
                dibentuk oleh Islamiati Nita Hidayat (Sastra Inggris). Pada
                awalnya Gunadarma Esports hanyalah sebuah komunitas kecil yang
                baru terbentuk di Universitas Gunadarma.
              </p>
              <br />
              <p>
                Pada saat itu sang founder hanya berniat untuk mewadahi para
                gamers di Univ gundar untuk menyalurkan bakat dan minat dalam
                bermain game terutama di era virtual dan globalisasi ini.
              </p>
              <br />
              <p>
                Lalu project pertama tournament yang di ikuti oleh Gundar esport
                adalah MLCC. Setelah berhasil menjuarai MLCC, gundar esports
                yang awalnya hanya divisi MLBB sekarang melebarkan sayap nya
                dengan membuka divisi lain seperti PUBGM, VALO, PB, DOTA.
                Berbagai tim mulai bermunculan dan gundar esports mulai aktif
                dalam dunia tournament berskala nasional atau internasional.
              </p>
              <br />
              <p>
                Saat ini gundar esports juga memiliki talent diantaranya caster
                dan BA yang bertugas untuk mengkampanyekan esport di gundar dan
                memiliki banyak staff divisi yang berdedikasi dan memiliki
                tujuan untuk memajukan esport gunadarma.
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Section>
  );
}
