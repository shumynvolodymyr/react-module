import './User.css';
export default function User({user}) {
    const {id, name, username, email, address: {street, city, geo: {lat, lng}}, phone} = user
    return (
        <div className={'user'}>
            <h1>{id}. {name} {username}.</h1>
            <p>
                Email: {email}, <br/>
                Phone: {phone},<br/>
                Address:<br/>
                City: {city},<br/>
                Street: {street},<br/>
                Geo:<br/>
                lat: {lat}, lng: {lng}<br/>
            </p>
        </div>
    );
}