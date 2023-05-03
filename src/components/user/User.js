import React from 'react';
import css from './User.module.css'
const User = ({user}) => {
    const {id,name,username} = user
    return (
        <div className={css.User}>
            <div>id: {id} </div>
            <div>name: {name}</div>
            <div>username: {username}</div>
        </div>
    );
};

export default User;