import Header from "../components/Header";
import {useState} from "react";
import CountryInfoDetails from "../components/individual page/CountryInfoDetails";

const CountryInfo = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return(

        <div>
            <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
            <CountryInfoDetails setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        </div>
    )
}

export default CountryInfo;