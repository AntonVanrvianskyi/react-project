import React from 'react';
import Users from "../components/users/Users";
import UserForm from "../components/userForm/UserForm";

const UserPage = () => {
    return (
        <div>
            <UserForm/>
            <Users/>
        </div>
    );
};

export default UserPage;