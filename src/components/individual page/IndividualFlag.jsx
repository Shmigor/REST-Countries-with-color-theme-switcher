import { data } from "../../data";
import { useParams } from "react-router";


const IndividualFlag = () => {

    const { name } = useParams();
    const country = data.filter((item) => item.name === name);
    console.log(country[0].name);

    return (
        <img className="country-info-flag" src={country[0].flags.svg} alt={country[0].name} />
    )
}

export default IndividualFlag;