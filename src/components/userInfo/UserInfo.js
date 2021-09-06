import './UserInfo.css'
import {useDispatch} from "react-redux";
import {setModalStatus} from "../../redux/actions/ActionsCreator";

export default function UserInfo() {

    let dispatch = useDispatch();

    return (
        <div className={'registration'} onClick={() => dispatch(setModalStatus(false))}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHP-RWRh1rrTqmNr47cNGPmfmOLTy9g-yZAg&usqp=CAU"
                alt=""/>

        </div>
    );
}
