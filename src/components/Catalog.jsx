import Search from "./Search";
import {data} from "../data.js";
import Card from "./Card";
import {useState, useEffect} from "react";



const Catalog = ({isDarkMode, setIsDarkMode})=>{

    const [countries, setCountries] = useState(data);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=>{
        setCountries(
            data.filter((country)=>
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    },[searchQuery]);

    return(
        <div className={isDarkMode ? "country-catalog country-catalog-dark" : "country-catalog"}>
            <Search setSearchQuery={setSearchQuery}
                    setIsDarkMode={setIsDarkMode} 
                    isDarkMode={isDarkMode}/>
            <div className="country-catalog-wrapper">
                {countries.map((country) => {
                    return <Card 
                            setIsDarkMode={setIsDarkMode} 
                            isDarkMode={isDarkMode}
                            key={country.name}
                            country = {country} />
                })}
                
            </div>
        </div>
    )
}

export default Catalog;