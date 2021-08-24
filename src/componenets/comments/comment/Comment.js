import {useHistory} from "react-router";
import './Comment.css'

export default function Comment({comment, url}) {
    const {id, name} = comment;

    let history = useHistory();


    function pushToHistory() {
        history.push(url + '/' + id, comment)
    }

    return (
        <div className={'comment-box'}>
            <div className={'commentName-box'}>{id}. {name}</div>
            <button id={'btnStyle3'} onClick={pushToHistory}>Details</button>
        </div>
    );
}
