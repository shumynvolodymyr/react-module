import './Post.css'
import {useHistory} from "react-router";

export default function Post({post, url}) {
    const {id, title} = post;

    let history = useHistory();

    function navigatorToUser() {
        history.push(url + '/' + id, post)
    }


    return (
        <div className={'post-box'}>
            <div className={'postName-box'}>{id}. {title}</div>
            <button id={'btnStyle2'} onClick={navigatorToUser}>Detail</button>
        </div>
    );
}
