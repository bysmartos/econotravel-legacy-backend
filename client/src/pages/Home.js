import Subscribe from "../components/Subscribe.js";
import Header from "../components/Header.js";
import Carrusel from "../components/Carrusel.js";
import Footer from "../components/Footer.js";
import CardContact from "../components/CardContact.js";

export default function Home() {
  return (
    <div className="Home" id="home">
      <Header />
      <Carrusel />
      <CardContact />
      <Subscribe />
      <Footer />
    </div>
  );
}
