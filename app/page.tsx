import About from "@/components/about";
import Banner from "@/components/banner";
import Call from "@/components/call";
import Counter from "@/components/counter";
import Enhance from "@/components/enhance";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Pricing from "@/components/pricing";
import Services from "@/components/services";
import Why from "@/components/why";

export default function Home() {
  return (
    <>
      <Banner />
      <Counter />
      <About />
      <Services />
      <Gallery />
      <Why />
      <Enhance />
      <Pricing />
      <Gallery />
      <Call />
      <Footer />
    </>
  );
}
