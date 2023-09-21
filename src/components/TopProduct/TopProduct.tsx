import "./style.scss";

import costumes_title from "@assets/title/costumes.png";

import plug_1 from "@assets/product/plug_1.png";
import plug_2 from "@assets/product/plug_2.png";
import plug_3 from "@assets/product/plug_3.png";
import plug_4 from "@assets/product/plug_4.png";

import ButtonCustom from "@components/UI/ButtonCustom/ButtonCustom";
import Card from "@components/Card/Card";

const TopProduct = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="product__wrapper">
          <div className="product__cardS">
            <Card img={plug_1} name="Бомбер Gone Crazy хаки" price={2499} />
            <Card img={plug_2} name="Платье-футболка рыбы в аквариуме" price={899}/>
          </div>

          <img src={plug_3} alt="big banner" className="product__img"></img>
          
          <div className="product__cardM">
            <Card
              img={plug_4}
              name="Платье прозрачное в цветочек черное"
              price={1299}
            />
          </div>
        </div>

        <ButtonCustom text="Cмотреть все" />
      </div>
    </section>
  );
};

export default TopProduct;
