
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const Header = ({isDarkMode, setIsDarkMode})=>{

    
    function handleDarkMode() {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <header className={isDarkMode ? 'header-dark' : 'header'}>
            <Link className={isDarkMode ? 'header-dark' : 'header'} style={{textDecoration: 'none', color: 'black'}} to="/">
                <h1 className="where">Where in the world?</h1>
            </Link>
            <button className={isDarkMode ? 'switchmode-btn-dark' : 'switchmode-btn'} onClick={handleDarkMode}>
                {isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                <p className='mode-text'>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
            </button>
       </header>
    )
}

export default Header;