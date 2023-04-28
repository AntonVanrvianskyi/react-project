import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postService} from "../../services/post.service";
import {dispatchAction, } from "../../redux";
import Post from "../post/post";

const Posts = () => {

    const {posts} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        postService.getAll().then(value => value.data).then(value => dispatch(dispatchAction(value)))
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