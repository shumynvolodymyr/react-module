import './UserSelectComponent.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../../API/userApi/getUsers";

export default function UserSelectComponent({getUserID}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [users])

    return (
        <div className={'select-form'}>
            <form>
                <select
                    name="user"
                    onChange={(e) => {
                        getUserID(e.target.value)
                    }}>

                    {
                        users.map(value =>

                            <option key={value.id} value={value.id}>

                                {value.id}. {value.name} - {value.username}

                            </option>)
                    }

                </select>
            </form>
        </div>
    );
}