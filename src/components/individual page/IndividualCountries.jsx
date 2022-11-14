
import {useEffect, useState} from "react";
import { Oval } from 'react-loader-spinner'
import Button from "./Button";
import IndividualFlag from "./IndividualFlag";
import IndividualCountriesInfo from "./IndividualCountriesInfo";




const IndividualCountries = ({isDarkMode}) => {

     

        const [isLoading, setIsLoading] = useState(false);
        useEffect(() => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            },[1000]);
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
                    strokeWidthSecondary={2}/>
                </div>
            );
        };

    return(
        <div className={document.cookie.includes("true") ? "country-info-wrapper country-info-wrapper-dark" : "country-info-wrapper"}>
                <Button isDarkMode={isDarkMode}/>
            <div className="country-info-container">
                <IndividualFlag/>
                <IndividualCountriesInfo isDarkMode={isDarkMode}/>
            </div>
        </div>
    );
    };

export default IndividualCountries;