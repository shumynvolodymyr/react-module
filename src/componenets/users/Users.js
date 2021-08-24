import {useEffect, useState} from "react";
import {getUsers} from "../../services/services/axios.services.api";
import User from "./user/User";
import './Users.css'

export default function Users(props) {

    const {match: {url}} = props;

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))

    }, [])

    return (
        <div className={'users-box'}>
            {
                users.map(value => <User key={value.id} url={url} user={value}/>)
            }
        </div>
    );
}
