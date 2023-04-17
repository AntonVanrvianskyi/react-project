import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {UserService} from "../../services/User-service";


const UserForm = ({setUsers}) => {
const {register,handleSubmit} = useForm()

     const save = async (user) => {
      const {data} = await UserService.post(user)
         // console.log(data)
         setUsers(data)

    }
    return (
        <form onSubmit={handleSubmit(save)}>
           <input placeholder={'Name'} {...register('Name')}/>
            <input placeholder={'Surname'} {...register('Surname')}/>
            <input placeholder={'Email'} {...register('Email')}/>
            <button>Save</button>


        </form>
    );
};

export default UserForm;