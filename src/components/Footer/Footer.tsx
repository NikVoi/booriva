import "./style.scss";

import { ReactComponent as Logo } from "@assets/Logo.svg";
import { ReactComponent as Instagram } from "@assets/social/inst.svg";
import { ReactComponent as Facebook } from "@assets/social/facebook.svg";

import creator from "@assets/creator.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#">
          <Logo className="footer__logo" />
        </a>

        <div className="footer__block">
          <h2>Инфо</h2>

          <nav>
            <a href="#">Контакты</a>
            <a href="#">Система лояльности</a>
            <a href="#">Обмен и возврат</a>
            <a href="#">Доставка и оплата</a>
          </nav>
        </div>

        <div className="footer__block">
          <h2>Наш Адрес</h2>

          <h3>г.Киев, ул. Нижний Вал, 37</h3>
          <h3>Пн — Вс: с 11:00 до 21:00</h3>
        </div>

        <div className="footer__block">
          <h2>СОЦ.СЕТИ</h2>

          <a href="#">
            <Instagram className="footer__link" />
          </a>
          <a href="#">
            <Facebook className="footer__link"/>
          </a>
        </div>

        <div className="footer__about">
          <div className="footer__creator">
            <img src={creator} alt="creator" />
          </div>

          <div className="footer__feedback">
            <h3>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</h3>
            <a href="#">Написать Иванке</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
