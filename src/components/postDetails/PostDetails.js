import {useEffect, useState} from "react";
import {getPost} from "../../API/posts.api";

export default function PostDetails({match: {params: {id}}}) {

    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(value => setPost({...value}))
    }, [id])

    return (
        <div>
            {
                JSON.stringify(post)
            }
        </div>
    );
}
