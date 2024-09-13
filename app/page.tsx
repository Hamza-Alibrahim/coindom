import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Market from "./components/Market";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Market />
      <ChooseUs />
      <Join />
      <Footer />
    </>
  );
};
export default page;
