import {useHistory} from "react-router";
import './CommentDetails.css'

export default function CommentDetails(props) {

    const {location: {state: {id, name, email}}} = props;
    let history = useHistory();

    function goBack() {
        history.goBack()
    }

    return (
        <div>
            <div className={'button-commentDetail-box'}>
                <button id={'btn3'} onClick={goBack}><img
                    src="https://icon-library.com/images/previous-next-icon/previous-next-icon-19.jpg" alt=""/>Back
                </button>
                <div className={'comment-info-box'}>
                    <h2>{id}. {name}</h2>
                    <p><i>E-mail: {email}</i></p>
                </div>
            </div>
        </div>
    );
}
