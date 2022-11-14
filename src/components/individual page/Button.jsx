import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';


const Button = ({isDarkMode}) => {
    return (

        <Link to="/">
        <button className={document.cookie.includes("true") ? "back-btn back-btn-dark" : "back-btn"}>
            <FontAwesomeIcon icon={faArrowLeft}/>
            Back
        </button>
    </Link>



    )
}

export default Button