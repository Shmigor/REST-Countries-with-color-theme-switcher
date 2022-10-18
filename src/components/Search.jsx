import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Search = ({setSearchQuery})=>{
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
       };
    return (
        <div className="search-container">
            <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
            <input className="search-input" placeholder="Search for a country..." type="search" onChange={handleSearch}/>
        </div>
    )
}

export default Search;