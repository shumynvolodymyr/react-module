import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../API/getUsers";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [users])

    return (
        <div className={'users-box'}>

            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}