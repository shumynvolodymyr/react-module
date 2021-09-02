import './GenreBadge.css'

export default function GenreBadge({genres}) {
    return (
        <div className={'genres-box'}>
            {
                genres.map(value =>
                    <div className={'genres'} key={value.id} onClick={() => console.log(value.id)}>
                        {value.name}
                    </div>)
            }
        </div>
    );
}
