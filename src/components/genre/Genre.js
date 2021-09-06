import './Genre.css'
import {getMovieWithGenres} from "../../services/movies.api";
import {
    Link,
} from "react-router-dom";

export default function Genre({genres, dispatch}) {

    return (
        <div className={'genres-box'}>
            {
                genres.map(value =>
                    <Link
                        to={`/${value.name}`}
                        className={'genres'}
                        key={value.id}
                        onClick={() => dispatch(getMovieWithGenres(value.id))}
                    >

                        {value.name}

                    </Link>
                )
            }
        </div>
    );
}
