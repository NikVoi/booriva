
import Footer from "@components/Footer/Footer";
import Instagram from "@components/Instagram/Instagram";
import Loyalty from "@components/Loyalty/Loyalty";
import Utp from "@components/Utp/Utp";
import Header from "@components/header/Header";
import "@style/global.scss";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      
      <Loyalty/>

      <Utp/>

      <Instagram/>
      <Footer />
    </div>
  );
}
