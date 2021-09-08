import './UserInfo.css'
import {useDispatch, useSelector} from "react-redux";
import {setModalStatus} from "../../redux/actions/ActionsCreator";

export default function UserInfo() {

    let dispatch = useDispatch();
    const {login} = useSelector(state => state.usersReducer.userName);

    return (
        <div className={'registration'} onClick={() => dispatch(setModalStatus(true))}>

            {login && <span className={'userName'}>{login}</span>}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHP-RWRh1rrTqmNr47cNGPmfmOLTy9g-yZAg&usqp=CAU"
                alt=""/>

        </div>
    );
}
