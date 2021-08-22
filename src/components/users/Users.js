import {useEffect, useState} from "react";
import {getUsers} from "../../API/user.api";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";
import "./Users.css"

export default function Users(props) {

    let {match: {url}} = props;
    let [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let usersList = await getUsers();
            setUsers([...usersList]);
        }

        fetchData();

    }, []);

    return (
        <div className={'users-box'}>
            <div className={'users'}>
                {users.map(value => <User key={value.id} url={url} user={value}/>)}
            </div>
            <div className={'info-box'}>
                <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }}/>
            </div>

        </div>
    );
}
