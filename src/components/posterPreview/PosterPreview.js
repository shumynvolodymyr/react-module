import "./PosterPreview.css"
import {ImageBuilder} from "../../myFunc/ImageBuilder";

export default function PosterPreview({film}) {

    const {poster_path, original_title} = film;

    return (
        <img src={ImageBuilder(`${poster_path}`,200)} alt={`${original_title}`}/>
    );
}
