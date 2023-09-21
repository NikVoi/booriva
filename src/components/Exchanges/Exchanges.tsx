import "./style.scss";

import exchanges from "@assets/title/exchanges.png";

import returns_1 from "@assets/returns/return_1.png";
import returns_2 from "@assets/returns/return_2.png";
import returns_3 from "@assets/returns/return_3.png";
import returns_4 from "@assets/returns/return_4.png";

const Exchanges = () => {
  return (
    <section className="exchanges">
      <div className="container">
        <img src={exchanges} alt="title" />

        <div className="exchanges__wrapper">
          <div className="exchanges__item">
            <img src={returns_1} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">
              Вы легко можете обменять либо вернуть вещь в течение 14 дней после
              покупки, если вещь не была в носке и не стиралась. Для этого
              свяжитесь с нами любым удобным способом.
            </div>
          </div>

          <div className="exchanges__item">
            <img src={returns_2} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">
              При обмене, мы отправляем вещь в тот же либо на следующий день,
              после того как забрали вещь с почты.
            </div>
          </div>

          <div className="exchanges__item">
            <img src={returns_3} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">
              Вещи, которые вы отправляете нам, мы забираем с почты 2 раза в
              неделю.
            </div>
          </div>

          <div className="exchanges__item">
            <img src={returns_4} alt="ico return" className="exchanges__img" />
            <div className="exchanges__text">
              При возврате, деньги возвращаются в течение 5 рабочих дней, после
              того как забрали вещь с почты и получили реквизиты для возврата.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exchanges;
