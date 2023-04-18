import React from 'react';
import './Comment.css'
const Comment = ({comment}) => {
    const { name, body, email} = comment
    return (
        <div className={'comment'}>

            <div>title: {name}</div>
            <div>body: {body}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default Comment;