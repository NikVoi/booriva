import Banner from "@components/Banner/Banner";
import Categories from "@components/Categories/Categories";
import Costumes from "@components/Costumes/Costumes";
import CrawlLine from "@components/CrawlLine/CrawlLine";
import Footer from "@components/Footer/Footer";
import Instagram from "@components/Instagram/Instagram";
import Location from "@components/Location/Location";
import Novelties from "@components/Noveltie/Novelties";
import TopProduct from "@components/TopProduct/TopProduct";
import Utp from "@components/Utp/Utp";
import Header from "@components/header/header";
import "@style/global.scss";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories/>
      <Novelties/>
      <Banner/>
      <Location/>
      <CrawlLine/>
      <TopProduct/>
      <Costumes/>
      <Utp/>
      <Instagram/>
      <Footer />
    </div>
  );
}
