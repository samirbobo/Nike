import Hero from "./Sections/Hero";
import CustomerReviews from "./Sections/CustomerReviews";
import PopularProduct from "./Sections/PopularProduct";
import Services from "./Sections/Services";
import SpecialOffer from "./Sections/SpecialOffer";
import Subscribe from "./Sections/Subscribe";
import SuperQuality from "./Sections/SuperQuality";
import Footer from "./Sections/Footer";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <PopularProduct />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}
