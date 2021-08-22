import {useEffect, useState} from "react";
import {getPost} from "../../API/posts.api";
import './PostDetails.css'

export default function PostDetails({match: {params: {id}}}) {

    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(value => setPost({...value}))
    }, [id])

    return (
        <div className={'post-info'}>
            {
                JSON.stringify(post)
            }
        </div>
    );
}
