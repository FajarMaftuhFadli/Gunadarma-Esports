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

export default function Home({ data }) {
  // console.log(data);
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
      <News data={data} />
      <About />
      <Team />
      <Events />
      <Achievments />
      <div className="w-full relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#131c2c] before:-skew-y-6 py-20 sm:py-24 md:py-32 lg:py-40 !mb-0 sm:!mb-2 md:!mb-4 lg:!mb-8 xl:!mb-12 2xl:!mb-20 !pb-0">
        <Content />
        <Social />
        <BottomImage />
      </div>
      {/* <Widget /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://fvcj49t2.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D%7C%20order(_createdAt%20desc)%7Btitle%2C%20_createdAt%2C%20image%7Balt%2C%20image%7Basset%7B_ref%7D%7D%7D%2C%20body%7D%5B0..5%5D"
  );
  // *[_type == "blog"]{title, _createdAt, slug{current}, image{alt, caption, image{asset{_ref}}}, body}
  const rawData = await res.json();

  const data = rawData.result.map((v) => {
    return {
      title: v.title,
      date: v._createdAt,
      image: {
        alt: v.image.alt ? v.image.alt : "alt...",
        url:
          "https://cdn.sanity.io/images/fvcj49t2/production/" +
          v.image.image.asset._ref
            .replace(/image-/g, "")
            .replace(/-(?!.*-)/g, "."),
      },
      body: v.body,
    };
  });
  return {
    props: {
      data,
    },
  };
}
