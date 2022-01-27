import Layout from "../../components/Layout";

import Head from "next/head";

export default function index() {
  return (
    <Layout pageTitle={"About"}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mt-24 g-px">
        <article className="w-full g-max-w g-text-c4">
          <h1 className="g-h1 mb-8">Gunadarma Esports</h1>
          <div className="max-w-lg">
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
              adalah MLCC. Setelah berhasil menjuarai MLCC, gundar esports yang
              awalnya hanya divisi MLBB sekarang melebarkan sayap nya dengan
              membuka divisi lain seperti PUBGM, VALO, PB, DOTA. Berbagai tim
              mulai bermunculan dan gundar esports mulai aktif dalam dunia
              tournament berskala nasional atau internasional.
            </p>
            <br />
            <p>
              Saat ini gundar esports juga memiliki talent diantaranya caster
              dan BA yang bertugas untuk mengkampanyekan esport di gundar dan
              memiliki banyak staff divisi yang berdedikasi dan memiliki tujuan
              untuk memajukan esport gunadarma.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
