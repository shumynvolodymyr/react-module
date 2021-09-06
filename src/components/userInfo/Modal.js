import {Input} from "reactstrap";
import './Modal.css'

export default function Modal(props) {
    return (
        <div className={`modal_wrapper ${props.isOpen ? 'open' : 'close'}`} style={{...props.style}}>
            <div className={'modal_body'}>
                <div className={'modal_close'} onClick={props.onModalClose}>&#x274E;</div>
                <Input type={'text'} name={'login'} placeholder={'login'}/>
                <Input type={'password'} name={'password'} placeholder={'password'}/>
                <button id={'btn'} type={'submit'}>ENTER</button>
                Welcome!!!
                <hr/>
                {props.children}
            </div>
        < /div>
    );
}
