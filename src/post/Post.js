import './Post.css'
export default function Post({post:{id, title}}) {
    return (
        <div className={'post'}>
           <p>{id}. {title}</p>
        </div>
    );
}
