import './GenreBadge.css'
import {getMovieWithGenres} from "../../services/movies.api";

export default function GenreBadge({genres, dispatch}) {


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
