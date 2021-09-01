import MoviesList from "../moviesList/MoviesList";
import './MoviesPage.css'

export default function MoviesPage({movies}) {
  const {results}= movies;

    return (
        <div className={'container'}>
            {results.map((value, index)=><MoviesList key={index} film={value}/>)}
        </div>
    );
}
