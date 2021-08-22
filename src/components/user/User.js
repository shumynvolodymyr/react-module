import {useHistory} from "react-router";
import './User.css'

export default function User({user, url}) {
    let history = useHistory();
    let navigate = () => {
        history.push(
            url + '/' + user.id,
            user
        );
    };
    return (
        <div className={'user-box'}>
            <div className={'nameUser'}>{user.name}</div>  <button id={'btn'} onClick={navigate}>user details</button>
        </div>
    );
}
