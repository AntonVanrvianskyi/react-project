import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postService} from "../../services/post.service";
import {postActions} from "../../redux";
import Post from "../post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts)

    useEffect(()=>{
        postService.getAll().then(value => value.data).then(value => dispatch(postActions.setPosts(value)))
    },[dispatch])

    return (
        <div>
            {
                posts.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;