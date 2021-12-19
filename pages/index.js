import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import Lorem from "../components/home/Lorem";
import NewsSection from "../components/home/NewsSection";
import UpcomingEvent from "../components/home/UpcomingEvent";
import Layout from "../components/Layout";
import Widget from "../components/Widget";

export default function Home() {
  return (
    <Layout pageTitle={"Home"}>
      <main className="flex flex-col justify-center items-center space-y-14 overflow-hidden">
        <HeroSection />
        <NewsSection />
        <AboutSection />
        <UpcomingEvent />
        {/* <div className="h-94 g-bg-test p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          debitis. Amet fugit nesciunt eum nemo, alias laboriosam dignissimos
          consectetur quasi laborum fugiat ex cum minima? Ducimus earum saepe
          quas vel.
        </div> */}
        {/* <Widget /> */}
      </main>
    </Layout>
  );
}
