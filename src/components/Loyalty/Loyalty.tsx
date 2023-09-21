import "./style.scss";

import loyalty from "@assets/title/loyalty.png";

import boorivagirls from "@assets/loyalty/boorivagirls.png";
import boorivasis from "@assets/loyalty/boorivasis.png";

const Loyalty = () => {
  return (
    <section className="loyalty">
      <div className="container">
        <img src={loyalty} alt="loyalty" />

        <div className="loyalty__wrapper">
          <div className="loyalty__item">
            <div className="loyalty__img">
              <img src={boorivagirls} alt="" />

              <h2>#boorivagirls</h2>

              <h3>Первая покупка &gt;699 грн*</h3>
              <h4>*вещь не находится на скидке</h4>
            </div>
            <div className="loyalty__description">
              <h3>
                5% бонусы от суммы чека 
                <br />
                <br />
                -30% скидка на одну вещь за 3 дня до и 3
                дня после дня рождения
              </h3>

              <h5>
                *Баллами можно рассчитываться только за те вещи, которые
                находятся не на скидке
              </h5>
            </div>
          </div>
          <div className="loyalty__item">
            <div className="loyalty__img">
              <img src={boorivasis} alt="" />

              <h2>#boorivagirls</h2>

              <h3>Сумма покупок &gt;5000 грн</h3>
            </div>
            <div className="loyalty__description">
              <h3>
                10% бонусы от суммы чека 
                <br />
                <br />
                -30% скидка на одну вещь за 3 дня до и
                3 дня после дня рождения
              </h3>

              <h5>
                *Баллами можно рассчитываться только за те вещи, которые
                находятся не на скидке
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loyalty;
