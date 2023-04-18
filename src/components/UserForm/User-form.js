import React from 'react';
import {useForm} from "react-hook-form";
import {UserService} from "../../services/User-service";


const UserForm = ({setUsers}) => {
const {register,handleSubmit, reset} = useForm()

     const save = async (user) => {
       await UserService.post(user).then(value => value.data).then(value => setUsers((prev)=>[...prev, value]))
         reset()


    }
    return (
        <form onSubmit={handleSubmit(save)}>
           <input placeholder={'Name'} {...register('name')}/>
            <input placeholder={'User-name'} {...register('username')}/>
            <input placeholder={'Email'} {...register('email')}/>
            <button>Save</button>


        </form>
    );
};

export default UserForm;