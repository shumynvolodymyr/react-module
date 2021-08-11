export default function Geo({geo:{lat,lng}}) {
    return (
        <div className={'geo'}>
            <h3>Geo:</h3>
            <p>
                <b>lat:</b> {lat} <br/>
                <b>lng:</b> {lng}
            </p>
        </div>
    );
}