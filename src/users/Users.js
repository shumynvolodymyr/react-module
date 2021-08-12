import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../API/users.api";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'users'}>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}