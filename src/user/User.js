import './User.css'
export default function User({user, postsOfUser}) {

    const {id, name, username} = user;

    const clickPostsOfUser = () => {
        postsOfUser(user)
    }

    return (
        <div className={'user'}>
            <h2>{id}. {name} {username}</h2>
            <button onClick={clickPostsOfUser}>POSTS</button>

        </div>
    );
}