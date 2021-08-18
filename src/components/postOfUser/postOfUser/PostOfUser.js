import './PostOfUser.css'

export default function PostOfUser({post: {id, title, body}}) {
    return (
        <div className={'post-box'}>

            <h3>{id}. {title}</h3>
            <p><i>Body: {body}</i></p>

        </div>
    );
}