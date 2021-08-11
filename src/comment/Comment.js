import './Comment.css'
export default function Comment({comment:{id, name}}) {
    return (
       <div className={'comment'}>
           <p>{id}. {name}</p>
       </div>
    );
}
