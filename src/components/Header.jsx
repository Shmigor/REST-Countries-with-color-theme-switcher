
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = ({isDarkMode, setIsDarkMode})=>{

    
    function handleDarkMode() {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <header className={isDarkMode ? 'header-dark' : 'header'}>
            <h1>Where in the world?</h1>
            <button className={isDarkMode ? 'switchmode-btn-dark' : 'switchmode-btn'} onClick={handleDarkMode}>
                {isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                <p className='mode-text'>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
            </button>
       </header>
    )
}

export default Header;