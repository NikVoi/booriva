import basket from "@assets/header/basket.svg";
import love from "@assets/header/love.svg";

const HeaderActive = () => {
  return (
    <>
      <div className="header__love">
        <a href="#">
          <img src={love} alt="love" />
        </a>
      </div>
      <div className="header__basket">
        <a href="#">
          <img src={basket} alt="basket" />
        </a>
      </div>
    </>
  );
};

export default HeaderActive;
