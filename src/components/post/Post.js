import {useHistory} from "react-router";
import './Post.css'

export default function Post({post, url}) {
    let history = useHistory();
    let navigate = () => {
        history.push(url + '/' + post.id,
            post
        );
    };
    return (
        <div className={'post-box'}>
            <div className={'titlePost'}>{post.title}</div>
            <button id={'button'} onClick={navigate}>post details</button>
        </div>
    )
}

