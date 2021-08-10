export default function Geo(props) {
    const {lat, lng} = props.geo;
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