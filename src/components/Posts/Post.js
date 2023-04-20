import React from 'react';
import './Post.css'
const Post = ({post}) => {
    const {title, id} = post
    return (
        <div className={'post'}>
            <div>{id}. {title}</div>
        </div>
    );
};

export default Post;