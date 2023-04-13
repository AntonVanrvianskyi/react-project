import React, {useEffect, useState} from 'react';
import User from "../User/User";
import axios from "axios";

const Users = ({setUserId}) => {

    let [users, setUsers] = useState([])

    useEffect(()=>{
     axios('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers(value))
    },[])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} setUserId={setUserId}   />)
            }
        </div>
    );
};

export default Users;