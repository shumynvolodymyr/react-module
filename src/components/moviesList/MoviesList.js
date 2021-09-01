import PosterPreview from "../posterPreview/PosterPreview";
import './MoviesList.css'
import StarsRating from "../starsRating/StarsRating";

export default function MoviesList({film}) {

    const {title, vote_average, release_date} = film;

    const year = release_date.slice(0,4)

    return (
        <div className={'film-box'}>
            <PosterPreview film={film}/>
            <span>{title}</span>
            <div className={'f-rate'}>
               <StarsRating vote_average={vote_average}/>
            </div>
            <div className={'year'}>
                {year}
            </div>

            {/* todo має MoviesListCard відкриватися на новій вкладці при кліку вся інфа про фільм*/}

        </div>
    );
}
