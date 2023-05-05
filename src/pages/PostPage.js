import React from 'react';
import Posts from "../components/posts/Posts";
import PostForm from "../components/postForm/PostForm";

const PostPage = () => {
    return (
        <div>
            <PostForm/>
            <Posts/>
        </div>
    );
};

export default PostPage;