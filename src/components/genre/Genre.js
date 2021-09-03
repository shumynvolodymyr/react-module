import './Genre.css'
import {getMovieWithGenres} from "../../services/movies.api";

export default function Genre({genres, dispatch}) {


    return (
        <div className={'genres-box'}>
            {
                genres.map(value =>
                    <div className={'genres'} key={value.id} onClick={() => {
                        dispatch(getMovieWithGenres(value.id))
                    }}>
                        {value.name}
                    </div>)
            }
        </div>
    );
}
