import {useHistory} from "react-router";

export default function Post({post, url}) {
    let history = useHistory();
    let navigate = () => {
        history.push(url + '/' + post.id,
            post
        );
    }
    return (
        <div>
            {post.title} - <button onClick={navigate}>post details</button>
        </div>
    );
}
