import Header from "../header/Header";
import Modal from "../userInfo/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setModalStatus} from "../../redux/actions/ActionsCreator";

export default function Layout(props) {

    let modalStatus = useSelector(state => state.MoviesReducer.modal);
    let dispatch = useDispatch();

    return (
        <>
            <Header/>

            {props.children}

            <Modal
                isOpen={modalStatus}
                onModalClose={() => dispatch(setModalStatus(false))}
            />
        </>
    );
}
