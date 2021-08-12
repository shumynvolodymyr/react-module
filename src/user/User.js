import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPosts} from "../API/user.posts.api";
import './User.css'

export default function User({user: {id, name, username}}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(id).then(value => setPosts([...value]))
    }, [id])

    return (
        <div className={'user'}>

            <h1>{id}. {name} {username}</h1>

            <Posts posts={posts}/>

        </div>
    );
}