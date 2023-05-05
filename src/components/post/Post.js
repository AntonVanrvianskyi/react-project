import React from 'react';

import css from './Post.module.css'
const Post = ({post}) => {

    const {id,title, body} = post
    return (
        <div className={css.Container}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;