import React from 'react';
import './Post.css'
const Post = ({post}) => {
    const {id, body} = post
    return (
        <div className={'post'}>
            <div>{id}. {body}</div>
        </div>
    );
};

export default Post;