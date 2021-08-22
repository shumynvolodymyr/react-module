import './Post.css'

import {
    Link
} from "react-router-dom";

export default function Post({post, url}) {
    return (
        <div className={'post-box'}>
            <div className={'titlePost'}>{post.title}</div>
            <Link to={{pathname:`${url}/${post.id}`, state:post}}>Details</Link>
        </div>
    )
}

