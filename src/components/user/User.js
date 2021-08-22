import {useHistory} from "react-router";

export default function User({user, url}) {
    let history = useHistory();
    let navigate = () => {
        history.push(
            url + '/' + user.id,
            user
        );
    };
    return (
        <div>
            {user.name} - <button onClick={navigate}>user details</button>
        </div>
    );
}
