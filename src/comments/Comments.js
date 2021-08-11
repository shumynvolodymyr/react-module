import {useEffect, useState} from "react";
import {getComments} from "../services/comment.service";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([]);
    let [style, setStyle] = useState('commentNone');

    useEffect(() => {
        getComments().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div className={'allComments'}>

            <button onClick={()=>{
                if (style==='commentNone') {
                    setStyle ('commentBlock')
                } else if (style==='commentBlock') {
                    setStyle('commentNone')
                }
            }}>Comments:</button>

            <div className={style}>
            {
                comments.map((value, index) => <Comment key={index} comment={value}/>)
            }
            </div>
        </div>
    );
}