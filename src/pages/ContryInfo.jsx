import Header from "../components/Header";
import IndividualCountries from "../components/individual page/IndividualCountries";

const CountryInfo = ({isDarkMode, setIsDarkMode}) => {



    return(
        <div>
            <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
            <IndividualCountries setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        </div>
    )
}

export default CountryInfo;