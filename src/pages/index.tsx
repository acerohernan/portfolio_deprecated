import Head from "next/head";
import { Navbar } from "../components";
import { About, Footer, Header, Skills, Work } from "../container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hernan Acero's Portfolio</title>
        <meta name="description" content="Hernan Acero´s portfolio" />
      </Head>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
