import User from "../user/User";
import './Users.css';
import {getUsers} from "../services/user.service";
import {useEffect, useState} from "react";

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, [])

    return (
        <div className={'allUsers'}>
            <h1>Users:</h1>
            <div className={'users'}>
                {
                    users.map((value, index) => <User key={index} user={value}/>)
                }
            </div>
        </div>
    );
}