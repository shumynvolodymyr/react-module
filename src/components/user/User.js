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
                <hr/>
                Address: <br/>
                Street: {street}, <br/>
                Suite: {suite}, <br/>
                City: {city}, <br/>
                Zipcode: {zipcode}, <br/>
                <hr/>
                Geo: <br/>
                lat: {lat}, <br/>
                lng: {lng}, <br/>
                <hr/>
                Company: <br/>
                name: {companyName}, <br/>
                catchPhrase: {catchPhrase}, <br/>
                bs: {bs},
            </p>
        </div>
    );
}