import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/service.component";
import Comment from "./Comment";
import {Outlet, useNavigate, useParams} from "react-router-dom";

const Comments = () => {
    const params = useParams()
    console.log(params);


    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentsService.getAll().then(value => value.data).then(value => setComments([...value]))
    },[])
    return (
        <div>
            <Outlet/>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }

        </div>
    );
};

export default Comments;