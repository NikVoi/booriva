import "./style.scss";

import img from "@assets/title/Novelties.png";
import Card from "@components/Card/Card";
import ButtonCustom from "@components/UI/ButtonCustom/ButtonCustom";

import placeholder_1 from "@assets/testHover.png";

const Novelties = () => {
  return (
    <section className="novelties">
      <div className="container">
        <img src={img} alt="novelties" className="section__name" />
      </div>

      <div className="novelties__list">
        <Card img={placeholder_1} name="Cвитшот вставка клетка" price={1999} />
        <Card img={placeholder_1} name="Cвитшот вставка клетка" price={1499} />
        <Card img={placeholder_1} name="Cвитшот вставка клетка" price={899} />
        <Card img={placeholder_1} name="Cвитшот вставка клетка" price={499} />
      </div>

      <div className="button__wrapper">
        <ButtonCustom text="Cмотреть все" />
      </div>
    </section>
  );
};

export default Novelties;
