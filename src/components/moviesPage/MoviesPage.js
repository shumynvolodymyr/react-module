import MoviesList from "../moviesList/MoviesList";
import './MoviesPage.css'
import {getMoviesPage} from "../../services/movies.api";
import {Button, Input} from 'reactstrap';

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

            {/*todo доробити для пагінації із вибором номеру сторінки*/}

            <form onClick={stopPrevDef} id={'paginationForm'}>
                <Button color={'secondary'} onClick={prevPage}>&#9665;</Button>
                <Input type="number" value={page} onChange={changePage}/>
                <Button color={'secondary'} onClick={nextPage}>&#9655;</Button>
            </form>
        </div>
    );
}
