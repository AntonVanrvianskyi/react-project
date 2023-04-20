import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {postsService} from "../../services/service.component";
import Post from "./Post";

const Posts = () => {
         const params = useParams();
         const{postId} = params
    const [posts, setPosts] = useState(null);
         useEffect(()=>{
             postsService.getById(postId).then(value => value.data).then(value => setPosts(value))
         },[posts])

    return (
        <div>
            {
                posts && <div>{<Post post={posts}/>}</div>
            }

        </div>
    );
};

export default Posts;