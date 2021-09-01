import './App.css';
import MoviesPage from "./components/moviesPage/MoviesPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "./services/movies.api";
import {getGenres} from "./services/genres.api";
import GenreBadge from "./components/genreBadge/GenreBadge";

function App() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    console.log(state);

    const {MoviesReducer: {movies}, GenresReducer: {genres}} = state

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
    }, [dispatch])

    return (
        <div id={'container'}>
            {genres.map((value, index) => <GenreBadge key={index} genres={value.genres}/>)}
            {movies.map((value, index) => <MoviesPage key={index} movies={value}/>)}
        </div>
    );
}

export default App;
