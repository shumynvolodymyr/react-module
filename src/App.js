import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, getUsers} from "./API/user.api";
import {clearStore, fetchUsers, pushUser} from "./redux/actions";

function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {usersReducer:{users}} = state;
    useEffect(() => {
        getUsers().then(value => dispatch(fetchUsers(value)))
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        let user = {name: e.target.name.value};
        addUser(user).then(value => dispatch(pushUser(value)));
    }

    function onClickClearState() {
        dispatch(clearStore())
    }

    function onClickGetUsers() {
        getUsers().then(value => dispatch(fetchUsers(value)))
    }

    return (
        <div>

            <form onSubmit={onSubmit}>
                <input type="text" name={'name'}/>
                <button>Add</button>
            </form>
            <hr/>
            <button onClick={onClickClearState}>RESET</button>
            <hr/>
            <button onClick={onClickGetUsers}>GET USERS</button>
            <hr/>

            {
                users.map(value => <div key={value.id}>{value.name}</div>)
            }
        </div>
    );
}

export default App;
