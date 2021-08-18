import './Comment.css'
export default function Comment({comment: {id, name, email, body}}) {
    return (
        <div className={'comment-box'}>
            <h2>{id}. {name}</h2>
            <p>
                <i>Email: {email}</i> <br/>
                <i>Body: {body}</i>
            </p>
        </div>
    );
}