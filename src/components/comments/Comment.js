import React from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, email} = comment
    const navigate = useNavigate();

    return (
        <div>

            <div>email: {email}</div>
            <button onClick={()=>navigate(postId.toString())}>Get Posts</button>

        </div>
    );
};

export default Comment;