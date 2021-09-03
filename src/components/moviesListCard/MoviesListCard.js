import {useHistory} from "react-router";
import './MoviesListCard.css'
import {ImageBuilder} from "../../myFunc/ImageBuilder";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieVideos} from "../../services/movies.api";
import MovieIdVideos from "./MovieIdVideos";
import {getGenres} from "../../services/genres.api";

export default function MoviesListCard() {

    const movieIdVideos = useSelector(state => state.MoviesReducer.movieIdVideos);
    const genres = useSelector(state => state.GenresReducer.genres);
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: {
            state: {
                poster_path,
                original_title,
                release_date,
                genre_ids,
                overview,
                id
            }
        }
    } = history;

    useEffect(() => {
        dispatch(getMovieVideos(id));
        dispatch(getGenres())
    }, [id, dispatch])

    let genresArr = [];
    const searchGenge = (genre_ids) => {
        for (let i = 0; i < genre_ids.length; i++) {
            genres.map(value => {
                let gnr = value.genres.filter(genre => genre.id === genre_ids[i])
                genresArr.push(gnr)
            })

        }
    }
    searchGenge(genre_ids)
    console.log(genresArr); //todo довести до ума

    return (
        <>
            <button className={'goBack'} onClick={() => history.goBack()}>Back</button>
            <div id={'face'}>
                <img className={'img'} src={ImageBuilder(poster_path, 300)} alt=""/>
                <div className={'t-row'}>
                    <div className={'r-1'}>
                        <div className={'r1-1'}>Original title:</div>
                        <div className={'r1-2'}><h1>{original_title}</h1></div>
                    </div>
                    <div className={'r-2'}>
                        <div className={'r1-1'}>Release date:</div>
                        <div className={'r1-2'}><h3>{release_date}</h3></div>
                    </div>

                    <div className={'r-1'}>
                        <div className={'r1-1'}>Genre:</div>
                        <div className={'r1-2'}><h3>{genre_ids}</h3></div>
                    </div>
                    <div className={'r-2'}>
                        <div className={'r1-1'}>Overview:</div>
                        <div className={'r1-2'}><h4><i>{overview}</i></h4></div>
                    </div>
                </div>
            </div>
            {
                movieIdVideos.map((value, i) => <MovieIdVideos key={i} results={value.results}/>)
            }
        </>
    );
}
