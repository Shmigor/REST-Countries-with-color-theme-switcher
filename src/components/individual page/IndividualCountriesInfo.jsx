import { useParams } from "react-router";
import { data } from "../../data";
import {useNavigate} from "react-router-dom";


const IndividualCountriesInfo = ({isDarkMode}) => {


    const { alpha3Code } = useParams();

    const country = data.filter((item) => item.alpha3Code === alpha3Code);
  
    const navigate = useNavigate();

    return(

        <div className="country-info-content-wrapper">
        <div className="country-info-content-countryname">
            <h2>{country[0].name}</h2>
        </div>
        <div className="country-info-content-other">
            <div>
                <p className="country-info-content-title">Native Name: <span className="country-info-content-title-notbold">{country[0].nativeName}</span></p>
                <p className="country-info-content-title"> Population: <span className="country-info-content-title-notbold">{country[0].population}</span></p>
                <p className="country-info-content-title">Region: <span className="country-info-content-title-notbold">{country[0].region}</span></p>
                <p className="country-info-content-title">Sub Region: <span className="country-info-content-title-notbold">{country[0].subregion}</span></p>
                <p className="country-info-content-title">Capital: <span className="country-info-content-title-notbold">{country[0].capital}</span></p>
                <p className="country-info-content-title">Area: <span className="country-info-content-title-notbold">{country[0].area}km²</span></p>
            </div>
            <div>
                <p className="country-info-content-title">Top level domain: <span className="country-info-content-title-notbold">{country[0].topLevelDomain}</span></p>
                <p className="country-info-content-title">Time Zone: {country[0].timezones.map((timezones)=> {
                    return (
                        <span className="country-info-content-title-notbold"> {timezones}</span>
                    )
                }
                )}</p>
                <p className="country-info-content-title">Currencies: {country[0]?.currencies && country[0].currencies.map((currencies)=> {
                    return (
                        <span className="country-info-content-title-notbold"> {currencies.code}, {currencies.name}, {currencies.symbol}</span>
                    )
                }
                )}</p>
                <p className="country-info-content-title">Languages: {country[0]?.languages && country[0].languages.map((languages)=> {
                    return (
                        <span className="country-info-content-title-notbold"> {languages.iso639_1}, {languages.iso639_2}, {languages.name}, {languages.nativeName} </span>
                    )
                }
                )}</p>
            </div>
        </div>

        <div className="country-info-borders">
        Border Countries: 
            {country[0].borders && country[0].borders.map((border) => {
                return (
                    <button onClick={() => navigate(`/${border}`)} className={isDarkMode ? "borders-btn borders-btn-dark" : "borders-btn"}>{border}</button>
                )
                })}
        </div>
    </div>

    )
}

export default IndividualCountriesInfo;