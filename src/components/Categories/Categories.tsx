import "./style.scss";

import t_short from "@assets/categories/T-shirts.png";
import top from "@assets/categories/top.png";
import hoodie from "@assets/categories/hoodie.png";
import dresses from "@assets/categories/dresses.png";
import costumes from "@assets/categories/costumes.png";
import bottom from "@assets/categories/bottom.png";

import ButtonNoActive from "@components/UI/ButtonNoActive/ButtonNoActive";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__wrapper categories__wrapper--left">
          <div className="categories__item">
            <img src={t_short} alt="T-shirts" className="categories__img" />

            <ButtonNoActive text="футболки" />
          </div>

          <div className="categories__item">
            <img src={dresses} alt="dresses" className="categories__img" />

            <ButtonNoActive text="Платья" />
          </div>

          <div className="categories__item">
            <img src={costumes} alt="costumes" className="categories__img" />

            <ButtonNoActive text="Костюмы" />
          </div>
        </div>

        <div className="categories__wrapper categories__wrapper--right">
          <div className="categories__item">
            <img src={bottom} alt="bottom" className="categories__img" />

            <ButtonNoActive text="Низ" />
          </div>

          <div className="categories__item">
            <img src={top} alt="top" className="categories__img" />

            <ButtonNoActive text="Верх" />
          </div>

          <div className="categories__item">
            <img src={hoodie} alt="hoodie" className="categories__img" />

            <ButtonNoActive text="Худи" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
