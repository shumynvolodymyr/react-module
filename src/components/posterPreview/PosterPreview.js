import "./PosterPreview.css"

export default function PosterPreview({film}) {

    const {poster_path, original_title} = film;

    const imageBuilder = (poster_path, size) => `https://image.tmdb.org/t/p/w${size}${poster_path}`;

    return (
        <img src={imageBuilder(`${poster_path}`,200)} alt={`${original_title}`}/>
    );
}
