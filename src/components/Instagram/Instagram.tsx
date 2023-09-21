import "./style.scss";

import photoInst_1 from "@assets/instagram/inst_photo_1.png";
import photoInst_2 from "@assets/instagram/inst_photo_2.png";
import photoInst_3 from "@assets/instagram/inst_photo_3.png";
import photoInst_4 from "@assets/instagram/inst_photo_4.png";
import photoInst_5 from "@assets/instagram/inst_photo_5.png";

const Instagram = () => {
  return (
    <section className="instagram">
      <div className="container">
        <div className="instagram__wrapper">
          <div className="instagram__item">
            <h2>Instagram</h2>
            <h4>
              Мы в экстазе, когда ты нас отмечаешь&#41;
              <br /> Отмечай плз чаще
            </h4>
          </div>
          <div className="instagram__item">
            <img src={photoInst_1} alt="instagram photo" />
          </div>
          <div className="instagram__item">
            <img src={photoInst_2} alt="instagram photo" />
          </div>
          <div className="instagram__item">
            <img src={photoInst_3} alt="instagram photo" />
          </div>
          <div className="instagram__item">
            <img src={photoInst_4} alt="instagram photo" />
          </div>
          <div className="instagram__item">
            <img src={photoInst_5} alt="instagram photo" />
          </div>
          <div className="instagram__item">
            <h3>#boorivagirls </h3>
            <h4>
              <span>Ставь тэг чтобы быть в нашей тусовке.</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
