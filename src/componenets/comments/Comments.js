import {useEffect, useState} from "react";
import {getComments} from "../../services/services/axios.services.api";
import Comment from "./comment/Comment";
import './Comments.css'

export default function Comments(props) {

    const {match: {url}} = props;

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(({data}) => setComments([...data]));
    }, [])
    return (
        <div className={'comments-box'}>
            {
                comments.map(value =>
                    <Comment
                        key={value.id}
                        url={url}
                        comment={value}
                    />)
            }
        </div>
    );
}
