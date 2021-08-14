import {useEffect, useState} from "react";
import {Post} from "../post/Post";
import {getPosts} from "../../API/posts.api";
import './Posts.css'

export function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    const detailsInfoOfPost = (id) => {
        const searchPost = posts.filter(value => value.id === id)
        setPost(searchPost);
    }

    useEffect(() => {
        getPosts()
            .then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'wrap'}>
            <div className={'posts-box'}>
                {
                    posts.map(value => <Post key={value.id} post={value} detailsInfoOfPost={detailsInfoOfPost}/>)
                }
            </div>

            {post &&
            <div className={'info-box'}>
                <h3>{post[0].id}. {post[0].title}</h3>
                <p><i>Body: {post[0].body}</i></p>
            </div>
            }
        </div>
    )
}