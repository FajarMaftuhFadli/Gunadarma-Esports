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
import Social from "../components/home/Social";
import EmailUs from "../components/home/EmailUs";
import BottomImage from "../components/home/BottomImage";

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
      <div className="w-full relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#131c2c] before:-skew-y-6 py-20 sm:py-24 md:py-32 lg:py-40 !mb-0 sm:!mb-2 md:!mb-4 lg:!mb-8 xl:!mb-12 2xl:!mb-20 !pb-0">
        {/* sm:!mb-12 md:!mb-16 lg:!mb-24 xl:!mb-28 2xl:!mb-36 */}
        <Content />
        <Social />
        <BottomImage />
      </div>
      <Widget />
    </Layout>
  );
}
