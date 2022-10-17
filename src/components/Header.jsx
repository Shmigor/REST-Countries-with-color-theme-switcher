// import moonIcon from '../Icons/moon.png'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = ()=>{
    return(
        <header className='header'>
            <h1>Where in the world?</h1>
            <div className='switchmode-container'>
                {/* <img className='moonicon' src={moonIcon} alt="icon" /> */}
                <FontAwesomeIcon icon={faMoon} />
                <p className='mode-text'>Dark Mode</p>
            </div>
       </header>
    )
}

export default Header;