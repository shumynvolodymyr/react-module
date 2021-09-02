import './GenreBadge.css'

export default function GenreBadge({genres}) {
    return (
        <div className={'genres'}>
            <ul>
                {
                    genres.map(value => <li key={value.id}>{value.name}</li>)
                }
            </ul>
        </div>
    );
}
