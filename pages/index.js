import Head from "next/head";

import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import News from "../components/home/News";
import About from "../components/home/About";
import Events from "../components/home/Events";
import Widget from "../components/Widget";
import Lorem from "../components/home/Lorem";

import Section from "../components/Section";
import Team from "../components/home/Team";

import "swiper/css";
import "swiper/css/pagination";
import Achievments from "../components/home/Achievements";
import Content from "../components/home/Content";

export default function Home() {
  return (
    <Layout pageTitle={"Home"}>
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
      <Hero />
      <News />
      <About />
      <Team />
      <Events />
      <Achievments />
      <div className="w-full bg-[#131c2c] -skew-y-6 py-20">
        <Content />
        {/* <div className="w-full h-60 bg-red-200 skew-y-6"></div> */}
      </div>
      <Widget />
    </Layout>
  );
}
