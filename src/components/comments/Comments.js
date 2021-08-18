import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../API/getComments";
import './Comments.css'


export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, [comments])

    return (
        <div className={'comments-box'}>

            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}