import './User.css'

export default function User({user}) {
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = user;

    return (
        <div className={'user-box'}>
            <h2>{id}. {name} {username}</h2>
            <p>
                Email: {email}, <br/>
                Phone: {phone}, <br/>
                Website: {website}, <br/>
            </p>
            <hr/>
            <p>
                Address: <br/>
                Street: {street}, <br/>
                Suite: {suite}, <br/>
                City: {city}, <br/>
                Zipcode: {zipcode}, <br/>
            </p>
            <hr/>
            <p>
                Geo: <br/>
                lat: {lat}, <br/>
                lng: {lng}, <br/>
            </p>
            <hr/>
            <p>
                Company: <br/>
                name: {companyName}, <br/>
                catchPhrase: {catchPhrase}, <br/>
                bs: {bs},
            </p>
        </div>
    );
}