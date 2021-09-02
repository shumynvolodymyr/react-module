import {setGenres} from "../redux/actions/ActionsCreator";
import {apiKey, configGenre, url} from "./config";

export const getGenres = () => async (dispatch) => {
    dispatch(setGenres(await (await fetch(url + configGenre, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })).json()));

}

