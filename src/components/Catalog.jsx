import Search from "./Search";
import {data} from "../data.js";
import Card from "./Card";
import {useState, useEffect} from "react";
import Filter from "./Filter";



const Catalog = ({isDarkMode})=>{

    const [countries, setCountries] = useState(data);
    const [searchQuery, setSearchQuery] = useState("");
    const [select, setSelect] = useState("");

    useEffect(()=>{
        if (select === "All") {
            setCountries(
                data
                    .filter((country)=>
                    country.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setCountries(
                data
                    .filter((country)=>
                    country.name.toLowerCase().includes(searchQuery.toLowerCase())
                ).filter((country) => country.region.includes(select))
            );
        }
    }, [searchQuery, select]);

    return(
        <div className={isDarkMode ? "country-catalog country-catalog-dark" : "country-catalog"}>
            
            <div className="filters-wrapper">
                <Search setSearchQuery={setSearchQuery}
                        isDarkMode={isDarkMode}/>
                <Filter
                    setSelect={setSelect}
                    isDarkMode={isDarkMode}/>
            </div>
            
            <div className="country-catalog-wrapper">
                {countries.map((country) => {
                    return <Card 
                            isDarkMode={isDarkMode}
                            key={country.name}
                            country = {country} />
                })}
                
            </div>
        </div>
    )
}

export default Catalog;