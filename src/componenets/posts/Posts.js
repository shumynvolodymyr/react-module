import {useEffect, useState} from "react";
import {getPosts} from "../../services/services/axios.services.api";
import Post from "./post/Post";
import './Posts.css'

export default function Posts(props) {
    const {match: {url}} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]))
    }, [])

    return (
        <div className={'posts-box'}>
            {
                posts.map(value => <Post key={value.id} url={url} post={value}/>)
            }
        </div>
    );
}
