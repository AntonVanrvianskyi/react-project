import React, {useEffect, useState} from 'react';
import {CommentsService} from "../../services/Comments-service";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

const Comments = () => {

    let [comments, setComments] = useState([])

    useEffect(()=>{
        CommentsService.getAll().then(value => value.data).then(value => setComments(value))
    }, [])
    return (
        <div>
            <CommentForm setComments={setComments} />
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;