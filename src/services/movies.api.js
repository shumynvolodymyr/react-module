import {setMovies} from "../redux/actions/ActionsCreator";
import {apiKey, configMovies, url} from "./config";

const getMovies = () => async (dispatch) => {
    dispatch(setMovies(await (await fetch(url + configMovies, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })).json()));

}

export {getMovies}
