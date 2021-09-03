import {setCurrentPage, setMovieIdVideos, setMovies} from "../redux/actions/ActionsCreator";
import {configMovies, headersAuthorization, page, url, withGenres} from "./config";

const getMovies = () => async (dispatch) => {
    dispatch(setMovies(await (await fetch(url + configMovies, headersAuthorization)).json()));

}

const getMoviesPage = (pageNumber) => async (dispatch) => {
    dispatch(setCurrentPage(await (await fetch(url + configMovies + page + `${pageNumber}`, headersAuthorization)).json()));

}

const getMovieWithGenres = (idGenres) => async (dispatch) => {
    dispatch(setMovies(await (await fetch(url + configMovies + withGenres + `${idGenres}`, headersAuthorization)).json()));

}

const getMovieVideos = (id) => async (dispatch) => {
    dispatch(setMovieIdVideos(await (await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, headersAuthorization)).json()))
}

export {getMovies, getMoviesPage, getMovieWithGenres, getMovieVideos}



