export default function PostOfUser({post: {id, title, body}}) {
    return (
        <div>
            <b>{id}. {title}.</b> <br/>
            <i>Body: {body}</i>
        </div>
    );
}