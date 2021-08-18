import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../API/getPosts";
import './Posts.css'

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, [])

    return (
        <div className={'posts-box'}>

            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
}