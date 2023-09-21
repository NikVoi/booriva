import "./style.scss"
import { ReactComponent as ButtonBG } from "@assets/button-bg-small.svg";

interface IProps {
    text: string; 
}

const ButtonNoActive = ({text}: IProps) => {
    return ( 
        <div className="button__noClick">
            <ButtonBG className="button__noClick--bg"/>
            <h2>{text}</h2>
        </div>
     );
}
 
export default ButtonNoActive;