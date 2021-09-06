import {useHistory} from "react-router";
import './MoviesListCard.css'
import {ImageBuilder} from "../../myFunc/ImageBuilder";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieVideos} from "../../services/movies.api";
import MovieIdVideos from "./MovieIdVideos";
import {Badge} from "reactstrap";
import {
    Link
} from "react-router-dom";
import {Rating} from "@material-ui/lab";
import {setGenreId} from "../../redux/actions/ActionsCreator";

export default function MoviesListCard() {

    const movieIdVideos = useSelector(state => state.MoviesReducer.movieIdVideos);
    const genres = useSelector(state => state.GenresReducer.genres);
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: {
            state: {
                backdrop_path,
                original_title,
                release_date,
                genre_ids,
                overview,
                id,
                vote_average
            }
        }
    } = history;


    useEffect(() => {
        dispatch(getMovieVideos(id));
    }, [id, dispatch])

    let genresArr = [];
    const searchGenres = (genre_ids) => {
        for (let i = 0; i < genre_ids.length; i++) {
            genres.map(value => {
                let genre = value.genres.filter(data => data.id === genre_ids[i])
                genresArr.push(genre[0]);
            });
        }
    };
    searchGenres(genre_ids);

    return (
        <>
            <button className={'goBack'} onClick={() => history.goBack()}>Back</button>
            <div id={'face'}>
                <img className={'img'} src={ImageBuilder(backdrop_path, 300)} alt=""/>
                <div className={'t-row'}>
                    <div className={'r-1'}>
                        <div className={'r1-1'}>Original title:</div>
                        <div className={'r1-2'}><h1>{original_title}</h1></div>
                    </div>

                    <div className={'r-2'}>
                        <div className={'r1-1'}>Release date:</div>
                        <div className={'r1-2'}><h5>{release_date}</h5></div>
                    </div>

                    <div className={'r-1'}>
                        <div className={'r1-1'}>Rating:</div>
                        <div className={'r1-2'}>
                            <Rating max={10} size={'large'} defaultValue={vote_average} precision={0.5}/> {vote_average}/10
                        </div>
                    </div>

                    <div className={'r-1'}>
                        <div className={'r1-1'}>Genre:</div>
                        <div className={'r1-2'}>{genresArr.map((value, index) =>
                            <Badge
                                key={index}
                                id={'Badge'}
                            >
                                <Link
                                    to={`/${value.name}`}
                                    onClick={() => dispatch(setGenreId(value.id))}
                                >
                                    {value.name}
                                </Link>
                            </Badge>)}
                        </div>
                    </div>

                    {overview &&
                    <div className={'r-2'}>
                        <div className={'overview-box'}>Overview:</div>
                        <p className={'r1-2'}><i>{overview}</i></p>
                    </div>
                    }

                </div>
            </div>
            {
                movieIdVideos.map((value, i) => <MovieIdVideos key={i} results={value.results}/>)
            }
        </>
    );
}
