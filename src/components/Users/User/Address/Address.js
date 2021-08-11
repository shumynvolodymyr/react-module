import Geo from "./Geo/Geo";

export default function Address({address: {city, zipcode, geo, street, suite}}) {

    return (
        <div className={'address'}>
            <h3>Address:</h3>
            <p>
                <b>City:</b> {city}, <br/>
                <b>Street:</b> {street}, <br/>
                <b>Zipcode:</b> {zipcode}, <br/>
                <b>Suite:</b> {suite}, <br/>
            </p>
            {
                <Geo geo={geo}/>
            }
        </div>
    );
}