import {useHistory} from "react-router";
import './User.css'

export default function User({user, url}) {
    const {id, name, username} = user

    let history = useHistory();


    function navigatorToUser() {
        history.push(url + '/' + user.id, user);
    }

    return (
        <div className={'user-box'}>
            <div className={'userName-box'}><h2>{id}. {name} - {username}</h2></div>
            <button id={'btnStyle'} onClick={navigatorToUser}>Detail</button>
        </div>
    );
}
