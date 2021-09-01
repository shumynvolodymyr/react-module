import "./StarsRating.css"

export default function StarsRating({vote_average}) {

    return (
        <div className={'rating'}>
            Рейтинг: {vote_average}
        </div>

    );
}
