import "./style.scss";

import { ReactComponent as Like } from "@assets/likeCard.svg";

interface IProps {
    img: string;
    name: string; 
    price: number;
}

const Card = ({img, name, price}: IProps) => {
  return (
    <div className="card">
      <div className="card__like"><Like/></div>
      <img src={img} alt="card clothes" className="card__img" />

      <div className="card__wrapper">
        <div className="card__title">{name}</div>
        <div className="card__price">{price}</div>
      </div>
    </div>
  );
};

export default Card;
