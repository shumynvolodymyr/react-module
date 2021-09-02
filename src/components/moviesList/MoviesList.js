import PosterPreview from "../posterPreview/PosterPreview";
import './MoviesList.css'
import StarsRating from "../starsRating/StarsRating";
import {
    Link
} from "react-router-dom";

export default function MoviesList({film}) {

    const {id, title, vote_average, release_date} = film;

    const year = release_date.slice(0, 4)

    return (
        <Link to={{pathname: `/${id}`, state: film}} id={'film-box'}>
            <PosterPreview film={film}/>
            <span>{title}</span>
            <div className={'f-rate'}>
                <StarsRating vote_average={vote_average}/>
            </div>
            <div className={'year'}>
                {year}
            </div>
        </Link>
    );
}




