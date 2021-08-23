import './PostDetails.css'

export default function PostDetails({location: {state}}) {
    const {id, title, body} = state;
    return (
        <div className={'post-info'}>
            <h2>{id}. {title}</h2>
            <p><i>Body: {body}</i></p>
        </div>
    );
}
