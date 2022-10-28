import { useParams } from "react-router";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';



const CountryInfoDetails = ({isDarkMode}) => {

    const { name } = useParams();
    const country = data.filter((item) => item.name === name);
        console.log(country[0].name);

    return(
        <div className={isDarkMode ? "country-info-wrapper country-info-wrapper-dark" : "country-info-wrapper"}>
            
                <Link to="/">
                    <button className={isDarkMode ? "back-btn back-btn-dark" : "back-btn"}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        Back
                    </button>
                </Link>
         

            <div className="country-info-container">
                <img className="country-info-flag" src={country[0].flags.svg} alt="" />
                <div>
                    <div className="country-info-content-countryname">
                        <h2>{country[0].name}</h2>
                    </div>
                    <div className="country-info-content-other">
                        <p>Native Name: <span>{country[0].nativeName}</span></p>
                        <p>Population: <span>{country[0].population}</span></p>
                        <p>Region: <span>{country[0].region}</span></p>
                        <p>Sub Region: <span>{country[0].subregion}</span></p>
                        <p>Capital: <span>{country[0].capital}</span></p>
                        <p>Top level domain: <span>{country[0].topLevelDomain}</span></p>
                        <p>Currencies: </p>
                        <p>Languages: </p>
                    </div>

                    <div className="country-info-borders">
                    <p>Border Countries: </p>
                    </div>
                </div>
            </div>
           


            
        </div>
    )

    };

export default CountryInfoDetails;