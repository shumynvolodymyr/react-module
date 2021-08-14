import './Post.css'
export function Post({post:{id,title}, detailsInfoOfPost}){

    return(
        <div className={'post-box'}>
            <h3>{id}.{title}</h3>
            <button onClick={()=>detailsInfoOfPost(id)}>INFO</button>
        </div>
    )
}