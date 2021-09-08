import {Input} from "reactstrap";
import './Modal.css'
import {useDispatch, useSelector} from "react-redux";
import {setUserName} from "../../redux/actions/ActionsCreator";
import {
    Link,
} from "react-router-dom";

export default function Modal(props) {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.usersReducer.userName);
    const saveUser = (e) => {
        dispatch(setUserName({...userName, [e.target.name]: e.target.value}));
    }

    return (
        <div className={`modal_wrapper ${props.isOpen ? 'open' : 'close'}`} style={{...props.style}}>
            <div className={'modal_body'}>
                <div className={'modal_close'} onClick={props.onModalClose}>&#x274E;</div>

                <Input className={'input'} value={userName.login} type={'text'} name={'login'}
                       placeholder={'login'} onChange={saveUser}/>
                <Input className={'input'} value={userName.password} type={'password'} name={'password'}
                       placeholder={'password'} onChange={saveUser}/>
                <Link to={`/user?name=${userName.login}`}><button id={'btn'} type={'submit'} onClick={props.onModalClose}>ENTER</button></Link>
                <span className="text-color">W</span>elcome!!!
                <hr/>
                {props.children}
            </div>
        < /div>
    );
}
