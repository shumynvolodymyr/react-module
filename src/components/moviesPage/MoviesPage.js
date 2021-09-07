import MoviesList from "../moviesList/MoviesList";
import './MoviesPage.css'
import {getMoviesPage} from "../../services/movies.api";
import {Button} from 'reactstrap';
import {pageCreator} from "../../myFunc/PageCreator";
import {useDispatch, useSelector} from "react-redux";

export default function MoviesPage({movies}) {

    const dispatch = useDispatch();
    const genreId = useSelector(state => state.GenresReducer.genreId);
    const {results, page, total_pages} = movies;
    const pages = [];

    pageCreator(pages, total_pages, page);

    const prevPage = () => {
        if (page !== 1) {
            dispatch(getMoviesPage(page - 1, genreId));
        }
    }
    const nextPage = () => {
        if (page < total_pages) {
            dispatch(getMoviesPage(page + 1, genreId));
        }
    }

    const changePage = (e) => {
        if (e.target.value <= total_pages && e.target.value >= 1) {
            dispatch(getMoviesPage(e.target.value, genreId));
        }
    }
    const stopPrevDef = (e) => {
        e.preventDefault()
    }

    return (
        <div className={'movies-page'}>

            {results.map((value, index) => <MoviesList key={index} film={value}/>)}
            <div className={'pagination-box'}>
                <div className={'pages'}>
                    {pages.map((num, index) =>
                        <span
                            key={index}
                            className={page === num ? "current-page" : 'page'}
                            onClick={() => dispatch(getMoviesPage(num, genreId))}>{num}</span>
                    )}
                </div>
                <form onClick={stopPrevDef} id={'paginationForm'}>
                    <Button color={'secondary'} onClick={prevPage}>&#9665;</Button>
                    <input min={1} max={total_pages} type="number" value={page} onChange={changePage}/>
                    <Button color={'secondary'} onClick={nextPage}>&#9655;</Button>
                </form>
            </div>
        </div>
    );
}
