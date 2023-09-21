import "./style.scss";

import delivery from "@assets/title/delivery.png";

import delivery_1 from "@assets/delivery/delivery_1.png";
import delivery_2 from "@assets/delivery/delivery_2.png";
import delivery_3 from "@assets/delivery/delivery_3.png";
import delivery_4 from "@assets/delivery/delivery_4.png";

const Delivery = () => {
  return (
    <section className="exchanges">
      <div className="container">
        <img src={delivery} alt="title" />

        <div className="exchanges__wrapper">
          <div className="exchanges__item">
            <img src={delivery_1} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">
              Доставка осуществляется Новой почтой день в день при заказе до
              18:00
            </div>
          </div>

          <div className="exchanges__item">
            <img src={delivery_2} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">Курьерская доставка 50 грн</div>
          </div>

          <div className="exchanges__item">
            <img src={delivery_3} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">
              Наложенный платеж на почте дополнительно оплачивается 2% от суммы
            </div>
          </div>

          <div className="exchanges__item">
            <img src={delivery_4} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">
              При оплате онлайн никаких больше дополнительных процентов
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
