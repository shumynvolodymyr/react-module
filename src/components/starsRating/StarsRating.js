import "./StarsRating.css"
import {RatingView} from "react-simple-star-rating";

export default function StarsRating({vote_average}) {

    return (
        <div className={'rating'}>
            <RatingView size={15} ratingValue={vote_average} stars={10}/>
        </div>
    );
}
