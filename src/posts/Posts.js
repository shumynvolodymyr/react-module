import Post from "../post/Post";

export default function Posts({posts}) {

    return (
        <ul>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </ul>
    );
}