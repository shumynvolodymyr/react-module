import Geo from "./Geo/Geo";

export default function Address(props) {

    const {city, zipcode, geo, street, suite} = props.address

    // console.log(props);
    // console.log(geo);

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
                [geo].map(value => <Geo geo={value}/>)
            }
        </div>
    );
}