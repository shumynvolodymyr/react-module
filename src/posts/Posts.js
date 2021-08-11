import Post from "../post/Post";
import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts} from "../services/post.servise";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [postStyle, setPostStyle] = useState('postsNone');

    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    }, [])

    return (
        <div className={'allPosts'}>
            <button onClick={()=>{
                if (postStyle==='postsNone') {
                    setPostStyle ('postsBlock')
                } else if (postStyle==='postsBlock') {
                    setPostStyle('postsNone')
                }
            }}>Posts:</button>
            <div className={postStyle}>
                {
                    posts.map(value => <Post key={value.id} post={value}/>)
                }
            </div>
        </div>
    );
}
