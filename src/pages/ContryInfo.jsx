import Header from "../components/Header";
import {useState} from "react";
import IndividualCountries from "../components/individual page/IndividualCountries";

const CountryInfo = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return(

        <div>
            <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
            <IndividualCountries setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        </div>
    )
}

export default CountryInfo;