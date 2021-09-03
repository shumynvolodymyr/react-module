import MoviesList from "../moviesList/MoviesList";
import './MoviesPage.css'
import {getMoviesPage} from "../../services/movies.api";
import {Button} from 'reactstrap';
import {useEffect} from "react";
import {pageCreator} from "../../myFunc/PageCreator";

export default function MoviesPage({movies, dispatch}) {

    const {results, page, total_pages} = movies;
    const pages = [];
    pageCreator(pages, total_pages, page);
    useEffect(() => {
        dispatch(getMoviesPage(page))
    }, [dispatch, page])

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
        if (e.target.value <= total_pages && e.target.value >= 1) {
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

            <div className={'pagination-box'}>
                <div className={'pages'}>
                    {pages.map((num, index) =>
                        <span
                            key={index}
                            className={page === num ? "current-page" : 'page'}
                            onClick={() => dispatch(getMoviesPage(num))}>{num}</span>
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
