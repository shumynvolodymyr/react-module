import './Comment.css'
export function Comment({comment: {id, name}, detailsInfoOfComment}) {
    return (
        <div className={'comment-box'}>
            <h3>{id}. {name}</h3>
            <button onClick={()=>{detailsInfoOfComment(id)}}>DETAILS</button>
        </div>
    );
}