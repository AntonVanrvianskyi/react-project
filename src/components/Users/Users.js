import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = () => {

    let [user, setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUser([...value])
            })
    },[])

    return (
        <div>
            {
                user.map(value => <User key={value.id} item={value}  />)
            }
        </div>
    );
};

export default Users;