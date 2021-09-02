import MoviesList from "../moviesList/MoviesList";
import './MoviesPage.css'
import {getMoviesPage} from "../../services/movies.api";

export default function MoviesPage({movies, dispatch}) {
    const {results, page, total_pages} = movies;

    const prevPage = () => {
        if (page !== 1) {
            dispatch(getMoviesPage(page - 1));
        }
    }
    const nextPage = () => {
        if (page < total_pages) {
            dispatch(getMoviesPage(page + 1));
        }
    }

    const changePage = (e) => {
        if (e.target.value <= total_pages && e.target.value !== 1) {
            dispatch(getMoviesPage(e.target.value));
            console.log(e.target.value);
        }
    }
    const stopPrevDef = (e) => {
        e.preventDefault()
    }

    return (
        <div className={'movies-page'}>

            {results.map((value, index) => <MoviesList key={index} film={value}/>)}
            <form onClick={stopPrevDef} id={'paginationForm'}>
                <button onClick={prevPage}>Prev page</button>
                <input type="number" value={page} onChange={changePage}/>
                <button onClick={nextPage}>Next page</button>
            </form>
        </div>
    );
}
