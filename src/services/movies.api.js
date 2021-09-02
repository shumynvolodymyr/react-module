import {setMovies} from "../redux/actions/ActionsCreator";
import {apiKey, configMovies, page, url} from "./config";

const getMovies = () => async (dispatch) => {
    dispatch(setMovies(await (await fetch(url + configMovies, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })).json()));

}

const getMoviesPage = (pageNumber) => async (dispatch) => {
    dispatch(setMovies(await (await fetch(url + configMovies + page + `${pageNumber}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })).json()));

}

export {getMovies, getMoviesPage}
