import Nav from "../Components/Nav";
import Hero from "../Sections/Hero";
import PopularProduct from "../Sections/PopularProduct";
import SuperQuality from "../Sections/SuperQuality";
import Services from "../Sections/Services";
import SpecialOffer from "../Sections/SpecialOffer";
import CustomerReviews from "../Sections/CustomerReviews";
import Subscribe from "../Sections/Subscribe";
import Footer from "../Sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PopularProduct />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
