import "./style.scss";

import cat from "@assets/Utp/cat.png";
import box from "@assets/Utp/box.png";
import heart from "@assets/Utp/heart.png";

const Utp = () => {
  return (
    <section className="utp">
      <div className="container">
        <div className="utp__wrapper">
          <img className="utp__img" src={cat} alt="cat"></img>
          <div className="utp__info">
            <h2>Отправка день в день</h2>
            <h3>При заказе до 1800</h3>
          </div>
        </div>
        <div className="utp__wrapper">
          <img className="utp__img" src={box} alt="box"></img>
          <div className="utp__info">
            <h2>Легкий возврат/обмен</h2>
            <h3>В течении 14 дней</h3>
          </div>
        </div>
        <div className="utp__wrapper">
          <img className="utp__img" src={heart} alt="heart"></img>
          <div className="utp__info">
            <h2>Сделано в Украине</h2>
            <h3>Прям в Киеве</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Utp;
