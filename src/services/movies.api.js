import {setCurrentPage, setMovies} from "../redux/actions/ActionsCreator";
import {apiKey, configMovies, page, url, withGenres} from "./config";

const getMovies = () => async (dispatch) => {
    dispatch(setMovies(await (await fetch(url + configMovies, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })).json()));

}

const getMoviesPage = (pageNumber) => async (dispatch) => {
    dispatch(setCurrentPage(await (await fetch(url + configMovies + page + `${pageNumber}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })).json()));

}

const getMovieWithGenres = (idGenres) => async (dispatch) => {
    dispatch(setMovies(await (await fetch(url + configMovies + withGenres + `${idGenres}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })).json()));

}

export {getMovies, getMoviesPage, getMovieWithGenres}
