import Search from "./Search";
import {data} from "../data.js";
import Card from "./Card";
import {useState, useEffect} from "react";



const Catalog = ()=>{

    const [countries, setCountries] = useState(data);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=>{
        setCountries(
            data.filter((country)=>
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    },[searchQuery]);

    return(
        <div className="contry-catalog">
            <Search setSearchQuery={setSearchQuery}/>
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