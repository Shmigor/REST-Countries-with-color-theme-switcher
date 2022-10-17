const Card = ({country})=> {
    return(
        <div className="card-container">
            
            <img className="flag-img" src={country.flags.svg} alt={country.name} />
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