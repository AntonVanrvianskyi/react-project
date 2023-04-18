import React from 'react';
import {useForm} from "react-hook-form";
import {CommentsService} from "../../services/Comments-service";

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset} = useForm();
    const save = async (comment)=>{
        await CommentsService.post(comment).then(value => value.data).then(value =>setComments((prev)=>[...prev, value]) )
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
                <input placeholder={'name'} {...register('name')}/>
                <input placeholder={'body'} {...register('body')}/>
                <input placeholder={'email'} {...register('email')}/>
            <button>Save</button>

        </form>
    );
};

export default CommentForm;