import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import {getPosts} from "../../API/posts.api";
import Post from "../post/Post";
import PostDetails from "../postDetails/PostDetails";

export default function Posts(props) {
    let {match: {url}} = props;
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let postsList = await getPosts();
            setPosts([...postsList]);
        }

        fetchData();

    }, []);

    return (
        <div>
            {posts.map(value => <Post key={value.id} url={url} post={value}/>)}
            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetails {...props}/>
            }}/>
        </div>
    );
}
