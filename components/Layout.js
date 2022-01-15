import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="lorem ipsum..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-hidden flex flex-col justify-center items-center space-y-28 sm:space-y-36 md:space-y-40 lg:space-y-48 max-w-[150rem] mx-auto relative pb-14 before:absolute before:h-full before:-left-0 before:w-[1px] before:z-50 before:bg-white/10 before:top-0 after:absolute after:h-full after:-right-0 after:w-[1px] after:z-50 after:bg-white/10 after:top-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
