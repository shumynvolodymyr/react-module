import './GenreBadge.css'

export default function GenreBadge({genres}) {
    return (
        <div className={'genres'}>
            <ul>
                {
                    genres.map(value => <li>{value.name}</li>)
                }
            </ul>
        </div>
    );
}
