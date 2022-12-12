import { Navbar } from "../components";
import { About, Footer, Header, Skills, Work } from "../container";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}
