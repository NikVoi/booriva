import "./style.scss";

import shop from "@assets/shop.png";
import booriva from "@assets/BOORIVA STORE.png";
import ButtonCustom from "@components/UI/ButtonCustom/ButtonCustom";

import bot_bg from "@assets/bg--bottom.png";
import top_bg from "@assets/bg--top.png";

const Location = () => {
  return (
    <section className="location">
      <div className="container">
        <div className="location__wrapper">
          <div className="location__info">
            <p>г.Киев, ул. Нижний вал, 37</p>
            <p>Ежедневно с 11:00 до 21:00</p>
          </div>
          <img className="location__img" src={shop} />
          <div className="location__description">
            Ты можешь заказать примерку понравившейся вещи или просто заглянуть,
            гуляя по Подолу, и примерять что-то из в наличии
          </div>

          <img className="location__img-bottom" src={bot_bg} />
          <img className="location__img-top" src={top_bg} />
          <img className="location__title" src={booriva} alt="booriva shop" />

          {/* <div className="location__maps"></div> */}
        </div>

        <ButtonCustom text="проложить маршрут" />
      </div>
    </section>
  );
};

export default Location;
