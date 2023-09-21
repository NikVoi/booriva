
import Delivery from "@components/Delivery/Derms";
import Exchanges from "@components/Exchanges/Exchanges";
import Footer from "@components/Footer/Footer";
import Instagram from "@components/Instagram/Instagram";
import Header from "@components/header/Header";
import "@style/global.scss";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      
      <Delivery/>

      <Instagram/>
      <Footer />
    </div>
  );
}
