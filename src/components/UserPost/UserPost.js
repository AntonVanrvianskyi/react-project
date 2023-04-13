import React from 'react';

const UserPost = ({post}) => {
    let {id, title, body, userId} = post
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>


        </div>
    );
};

export default UserPost;