import {Comment} from "../comment/Comment";
import {getComments} from "../../API/comments.api";
import {useEffect, useState} from "react";
import './Comments.css'

export function Comments() {

    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);
    console.log(comment);


    const detailsInfoOfComment = (id) => {
        let searchComment = comments.filter(value => value.id === id);
        setComment(searchComment);
    }

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, []);

    return (
        <div className={'wrap'}>
            <div className={'comments-box'}>
                {comments.map(value =>
                    <Comment
                        key={value.id}
                        comment={value}
                        detailsInfoOfComment={detailsInfoOfComment}
                    />)
                }
            </div>
            {comment && <div className={'info-box'}>
                <h3>{comment[0].id}. {comment[0].name}</h3>
                <p><i>Body: {comment[0].body}</i></p>
                <p><i>Email: {comment[0].email}</i></p>
            </div>
            }
        </div>
    )
}