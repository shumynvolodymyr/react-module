import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../API/posts.api";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value));
    }, [])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
            <Post/>
        </div>
    );
}