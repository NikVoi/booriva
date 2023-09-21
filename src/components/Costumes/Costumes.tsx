import "./style.scss";

import costumes_title from "@assets/title/costumes.png";

import costumes_1 from "@assets/costumes/costumes_1.png";
import costumes_2 from "@assets/costumes/costumes_2.png";
import costumes_3 from "@assets/costumes/costumes_3.png";
import costumes_4 from "@assets/costumes/costumes_4.png";

import ButtonCustom from "@components/UI/ButtonCustom/ButtonCustom";

const Costumes = () => {
  return (
    <section className="costumes">
      <div className="container">
        <img src={costumes_title} alt="costumes" />
      </div>

      <div className="costumes__wrapper">
        <img src={costumes_1} alt="costumes" className="costumes__img" />
        <img src={costumes_2} alt="costumes" className="costumes__img" />
        <img src={costumes_3} alt="costumes" className="costumes__img" />
        <img src={costumes_4} alt="costumes" className="costumes__img" />
      </div>

      <ButtonCustom text="Cмотреть все" />
    </section>
  );
};

export default Costumes;
