import Banner from "@components/Banner/Banner";
import Footer from "@components/Footer/Footer";
import Utp from "@components/Utp/Utp";
import Header from "@components/header/header";
import "@style/global.scss";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner/>
      <Utp/>
      <Footer />
    </div>
  );
}
