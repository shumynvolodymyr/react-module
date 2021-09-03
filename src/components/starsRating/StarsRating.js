import "./StarsRating.css"
import {starCreator} from "../../myFunc/StarCreator";

export default function StarsRating({vote_average}) {

    let stars = [];
    starCreator(vote_average, stars);

    return (
        <div className={'rating'}>
            {stars} <span className={'vote_average'}>{vote_average}</span>
        </div>
    );
}

