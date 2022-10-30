import { useParams } from "react-router";
import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { Oval } from 'react-loader-spinner'




const CountryInfoDetails = ({isDarkMode}) => {

    

        const { name } = useParams();
        const country = data.filter((item) => item.name === name);
        console.log(country[0].name);
        const navigate = useNavigate();

        const [isLoading, setIsLoading] = useState(false);
        useEffect(() => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            },[2000]);
        },[]);
        if(isLoading) {
            return(
                <div className="loader">
               <Oval
                    height={80}
                    width={80}
                    color="#FFFFFF"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#C4C1C0"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
/>
                </div>
            );
        };


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
                            <p className="country-info-content-title">Time Zone: <span className="country-info-content-title-notbold">{country[0].timezones[0]}</span></p>
                            <p className="country-info-content-title">Currencies: {country[0].currencies.map((currencies)=> {
                                return (
                                    <span className="country-info-content-title-notbold"> {currencies.code}, {currencies.name}, {currencies.symbol}</span>
                                )
                            }
                            )}</p>
                            <p className="country-info-content-title">Languages: {country[0].languages.map((languages)=> {
                                return (
                                    <span className="country-info-content-title-notbold"> {languages.iso639_1}, {languages.iso639_2}, {languages.name}, {languages.nativeName} </span>
                                )
                            }
                            )}</p>
                        </div>
                    </div>

                    <div className="country-info-borders">
                    Border Countries: 
                        {country[0].borders.map((borders) => {
                            return (
                                <button onClick={() => navigate(`/${country[0].alpha3Code}`)} className={isDarkMode ? "borders-btn borders-btn-dark" : "borders-btn"}>{borders}</button>
                            )
                            })}
                    </div>
                </div>
            </div>
           


            
        </div>
    )

    };

export default CountryInfoDetails;