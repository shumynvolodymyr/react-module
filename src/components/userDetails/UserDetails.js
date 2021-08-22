import {useEffect, useState} from "react";
import {getUser} from "../../API/user.api";
import './UserDetails.css'

export default function UserDetails({match: {params: {id}}}) {

    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}))
    }, [id])
    return (
        <div className={'user-info'}>
            {JSON.stringify(user)}
        </div>
    );
}
