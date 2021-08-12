import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../API/post.comments";
import Comments from "../comments/Comments";

export default function Post({post: {id, title}}) {

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        getCommentsOfPost(id).then(value => setComments([...value]))
    },[id])

    return (
        <li>
            {id}. {title}
            <Comments comments={comments}/>
        </li>
    );
}