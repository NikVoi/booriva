import "./style.scss"
import { ReactComponent as ButtonBG } from "@assets/button-bg.svg";

const Button = () => {
    return ( 
        <button>
            <ButtonBG/>
            <h2></h2>
        </button>
     );
}
 
export default Button;