import "./Post.css"
export default function Post({post:{id, title, body}}) {
    return (
        <div className={'post-box'}>
            <h2>{id}. {title}</h2>
            <p><i>Body: {body}</i></p>
        </div>
    );
}