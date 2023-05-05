import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import Post from "../post/Post";
import Pagination from "../pagination/Pagination";

const Posts = () => {





    const dispatch = useDispatch();
    const {posts, currentPerPage, currentPage} = useSelector(state => state.posts)

    useEffect(()=>{
       dispatch(postActions.setPosts())
    },[dispatch]);

    const lastIndex = currentPage * currentPerPage;
    const startIndex = lastIndex - currentPerPage;
    const currentPost = posts.slice(startIndex, lastIndex)


    return (
        <div>
            {
                currentPost.map(post=><Post key={post.id} post={post}/>)
            }
            <Pagination total={posts.length}/>
        </div>

    );
};

export default Posts;