import { ReactComponent as Logo } from "@assets/Logo.svg";
import phone from "@assets/header/phone.svg";
import location from "@assets/header/location.svg";
import search from "@assets/header/scope.png";

import "./style.scss";
import BottomNav from "./BottomNav/BottomNav";
import HeaderActive from "./HeaderActive/HeaderActive";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__contacts">
            <div className="header__location">
              <img src={location} alt="" />
              Киев, Нижний вал, 37
            </div>
            <div className="header__telephone">
              <img src={phone} alt="" />
              +38 063 843 34 71
            </div>
          </div>

          <div className="header__logo">
            <a href="#">
              <Logo />
            </a>
          </div>

          <div className="header__search">
            <a href="#">
              <img src={search} alt="search" />
            </a>
          </div>

          <div className="header__shop">
            <HeaderActive />
          </div>
        </div>

        <div className="header__bottom">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
