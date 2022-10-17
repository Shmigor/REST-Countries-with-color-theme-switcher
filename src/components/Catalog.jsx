import Search from "./Search";
import {data} from "../data.js";
import Card from "./Card";
import {useState} from "react";



const Catalog = ()=>{

    const [countries, setCountries] = useState(data);

    return(
        <div className="contry-catalog">
            <Search/>
            <div className="country-catalog-wrapper">
                {countries.map((country) => {
                    return <Card 
                            key={country.name}
                            country = {country} />
                })}
                
            </div>
        </div>
    )
}

export default Catalog;