import MoviesList from "../moviesList/MoviesList";
import './MoviesPage.css'

export default function MoviesPage({movies}) {
  const {results}= movies;

    return (
        <div className={'movies-page'}>
            {results.map((value, index)=><MoviesList key={index} film={value}/>)}
        </div>
    );
}
