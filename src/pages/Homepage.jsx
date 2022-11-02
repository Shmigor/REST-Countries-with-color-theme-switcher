import Header from "../components/Header";
import Catalog from "../components/Catalog";



const Homepage = ({isDarkMode, setIsDarkMode})=>{

    return(
        <div>
            <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
            <Catalog setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        </div>
    )
};

export default Homepage;