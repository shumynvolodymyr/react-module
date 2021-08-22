import {useEffect, useState} from "react";
import {getUsers} from "../../API/user.api";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";

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
        <div>
            {users.map(value => <User key={value.id} url={url} user={value}/>)}
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }}/>
        </div>
    );
}
