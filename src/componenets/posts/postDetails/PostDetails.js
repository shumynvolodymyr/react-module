import {useHistory} from "react-router";
import './PostDetails.css'

export default function PostDetails(props) {
    const {location: {state: {id, title, body}}} = props;

    let history = useHistory();

    function goBack() {
        history.goBack()
    }

    return (
        <div className={'wrap-post-details'}>
            <div className={'button-postDetail-box'}>
                <button id={'btn2'} onClick={goBack}><img
                    src="https://icon-library.com/images/previous-next-icon/previous-next-icon-19.jpg" alt=""/>Back
                </button>
                <div className={'post-info-box'}>
                    <h2>{id}. {title}</h2>
                    <p><i>Body: {body}</i></p>
                </div>
            </div>
        </div>
    );
}
