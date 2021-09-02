import GenreBadge from "../genreBadge/GenreBadge";
import MoviesPage from "../moviesPage/MoviesPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "../../services/movies.api";
import {getGenres} from "../../services/genres.api";

export default function HomePage() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    console.log(state);

    const {MoviesReducer: {movies}, GenresReducer: {genres}} = state

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
    }, [dispatch])

    return (
        <div className={'container'}>
            {genres.map((value, index) => <GenreBadge dispatch={dispatch} key={index} genres={value.genres}/>)}
            {movies.map((value, index) => <MoviesPage dispatch={dispatch} key={index} movies={value}/>)}
        </div>
    );
}
