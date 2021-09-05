import PosterPreview from "../posterPreview/PosterPreview";
import './MoviesList.css'
import StarsRating from "../starsRating/StarsRating";
import {
    Link
} from "react-router-dom";

export default function MoviesList({film}) {

    const {id, title, vote_average, release_date} = film;

    return (
        <Link to={{pathname: `/movie/${id}`, state: film}} id={'film-box'}>
            <PosterPreview film={film}/>
            <span>{title}</span>
            <div className={'f-rate'}>
                <StarsRating vote_average={vote_average}/>
            </div>
            <div className={'year'}>
                {release_date ? release_date.substr(0, 4) : release_date}
            </div>
        </Link>
    );
}




