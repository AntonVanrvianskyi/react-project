import React, {useEffect, useState} from 'react';


import {UserService} from "../../services/User-service";
import User from "../User/User";
import UserForm from "../UserForm/User-form";



const Users = () => {

    let [users, setUsers] = useState([])
    let [saveUser, setSaveUser] = useState([])

    useEffect(()=>{
        UserService.getAll().then(value => value.data).then(value => setUsers(value) )
    },[])

    // setUsers(saveUser)

    return (

        <div className={'users-component'}>
            <UserForm setUsers={setUsers}/>

            {

                users.map(user=> <User key={user.id} user={user} />)
            }


        </div>
    );
};

export default Users;