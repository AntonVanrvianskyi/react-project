import React from 'react';
import './User.css'

const User = ({user, }) => {

    let{name,username,email} = user
    return (
        <div className={'user-component'}>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>


        </div>
    );
};

export default User;