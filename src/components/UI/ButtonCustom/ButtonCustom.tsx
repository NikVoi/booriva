import "./style.scss"
import { ReactComponent as ButtonBG } from "@assets/buttonMain.svg";

interface IProps {
    text: string; 
}

const ButtonCustom = ({text}: IProps) => {
    return ( 
        <button className="button__custom">
            <ButtonBG className="button__custom--bg"/>
            <h2>{text}</h2>
        </button>
     );
}
 
export default ButtonCustom;