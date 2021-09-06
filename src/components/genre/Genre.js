import './Genre.css'
import {getMovieWithGenres} from "../../services/movies.api";
import {
    Link,
} from "react-router-dom";
import {setGenreId} from "../../redux/actions/ActionsCreator";
import {useDispatch} from "react-redux";

export default function Genre({genres}) {

    const dispatch = useDispatch();

    return (
        <div className={'genres-box'}>
            {
                genres.map(value =>
                    <Link
                        to={`/${value.name}`}
                        className={'genres'}
                        key={value.id}
                        onClick={() => {
                            dispatch(getMovieWithGenres(value.id));
                            dispatch(setGenreId(value.id));
                        }}
                    >

                        {value.name}

                    </Link>
                )
            }
        </div>
    );
}
