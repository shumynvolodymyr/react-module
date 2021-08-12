import Comment from "../comment/Comment";

export default function Comments({comments}) {

    return (
        <ul>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </ul>
    );
}