import {useHistory} from "react-router";
import './UserDetails.css'

export default function UserDetails({location: {state}}) {
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = state;

    let history = useHistory();

    function goBack() {
        history.goBack()
    }

    return (
        <div className={'wrap'}>
            <div className={'button-box'}>
                <button id={'btn'} onClick={goBack}><img
                    src="https://icon-library.com/images/previous-next-icon/previous-next-icon-19.jpg" alt=""/>Back
                </button>
            </div>
            <div className={'user-info-box'}>
                <h2>{id}. {name} {username}</h2>
                <p>
                    Email: {email}, <br/>
                    Phone: {phone}, <br/>
                    Website: {website}, <br/>
                </p>
                <hr/>

                <h3>Address:</h3>
                <p>
                    Street: {street}, <br/>
                    Suite: {suite}, <br/>
                    City: {city}, <br/>
                    Zipcode: {zipcode}, <br/>
                </p>
                <hr/>
                <h3>Geo:</h3>
                <p>
                    lat: {lat}, <br/>
                    lng: {lng}, <br/>
                </p>
                <hr/>
                <h3>Company:</h3>
                <p>
                    name: {companyName}, <br/>
                    catchPhrase: {catchPhrase}, <br/>
                    bs: {bs},
                </p>
            </div>
        </div>
    )
        ;
}
