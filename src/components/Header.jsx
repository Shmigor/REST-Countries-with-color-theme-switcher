
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const Header = ({isDarkMode, setIsDarkMode})=>{

    
    function handleDarkMode() {
        setIsDarkMode(!isDarkMode);
        document.cookie = `darkMode=${!isDarkMode}`
    };

    return(
        <header className={document.cookie.includes("true") ? 'header-dark' : 'header'}>
            <Link className={document.cookie.includes("true") ? 'header-dark' : 'header'} style={{textDecoration: 'none', color: 'black'}} to="/">
                <h1 className="where">Where in the world?</h1>
            </Link>
            <button className={document.cookie.includes("true") ? 'switchmode-btn-dark' : 'switchmode-btn'} onClick={handleDarkMode}>
                {document.cookie.includes("true") ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                <p className='mode-text'>{document.cookie.includes("true") ? "Dark Mode" : "Light Mode"}</p>
            </button>
       </header>
    )
}

export default Header;