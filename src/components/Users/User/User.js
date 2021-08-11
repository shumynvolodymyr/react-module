import './User.css'
import Address from "./Address/Address";

export default function User({user: {id, name, username, website, phone, company, email, address}}) {

    return (
        <div className={'user'}>
            <h1>{id}. {name} {username}</h1>
            <p>
                <b>Phone:</b> {phone}, <br/>
                <b>Email:</b> {email}, <br/>
                <b>Website:</b> {website}, <br/>
                <b>Company:</b> {JSON.stringify(company)}
            </p>
            {
                <Address address={address}/>
            }
        </div>
    )
}