import Header from "../components/Header";
import Catalog from "../components/Catalog";
import {useState} from "react";


const Homepage = ()=>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    return(
        <div>
            <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
            <Catalog setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        </div>
    )
};

export default Homepage;