import {useEffect, useState} from "react";
import {getUsers} from "../../API/users.api";
import User from "../user/User";
import {getPostsOfUser} from "../../API/postsOfUser.api";
import PostsOfUser from "../postsOfUser/PostsOfUser";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null);


    const postsOfUser = (usr) => {
        getPostsOfUser(usr.id).then(value => setPosts([...value]));
    }

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);

    return (
        <div className={'users-box'}>
            <div className={'users'}>
                {
                    users.map(value => <User key={value.id} user={value} postsOfUser={postsOfUser}/>)
                }
            </div>

            <div className={'posts'}>
                {posts &&
                <div className={'postsOfUser'}>{posts.map(value => <PostsOfUser key={value.id} post={value}/>)}</div>}
            </div>

        </div>
    );
}