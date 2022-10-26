const Card = ({country, setIsDarkMode, isDarkMode})=> {
    return(
        <div className={isDarkMode ? "card-container card-container-dark" : "card-container"}>
            
            <div className="flag-img-wrapper">
                <img className="flag-img" src={country.flags.svg} alt={country.name} />
            </div>
            <div className="card-container-content">
                <h3>{country.name}</h3>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </div>
    )
}

export default Card;