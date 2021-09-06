import Genre from "../genre/Genre";
import MoviesPage from "../moviesPage/MoviesPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "../../services/movies.api";
import {getGenres} from "../../services/genres.api";

export default function HomePage() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const {MoviesReducer: {movies}, GenresReducer: {genres}} = state

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
    }, [dispatch])

    return (
        <div className={'container'}>
            {genres.map((value, index) => <Genre key={index} genres={value.genres}/>)}
            {movies.map((value, index) => <MoviesPage key={index} movies={value}/>)}
        </div>
    );
}
