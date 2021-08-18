import PostOfUser from "../postOfUser/PostOfUser";
import './PostsOfUser.css'

export default function PostsOfUser({posts}) {
    return (

        <div className={'posts-box'}>
            {
                posts.map(value => <PostOfUser key={value.id} post={value}/>)
            }
        </div>
    );
}