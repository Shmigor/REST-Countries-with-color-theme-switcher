

const Filter = ({isDarkMode, setSelect})=>{
    function handleSelect(e) {
        setSelect(e.target.value);
    }
    return (
    <select onChange={handleSelect} className={isDarkMode ? "select select-dark" : "select"}>
        <option>All</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Oceania</option>
        <option>Europe</option>
    </select>
    );
};



export default Filter;