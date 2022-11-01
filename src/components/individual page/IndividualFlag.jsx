import { data } from "../../data";
import { useParams } from "react-router";


const IndividualFlag = () => {

    const { alpha3Code } = useParams();
    const country = data.filter((item) => item.alpha3Code === alpha3Code);
    console.log(country[0].alpha3Code);

    return (
        <img className="country-info-flag" src={country[0].flags.svg} alt={country[0].name} />
    )
}

export default IndividualFlag;