import React from 'react';
import {useForm} from "react-hook-form";

import css from './PostForm.module.css'
import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

const PostForm = () => {

    const {register,handleSubmit,reset} = useForm();
    const dispatch = useDispatch()
    const save = async (post) => {
        await dispatch(postActions.createPost({post}))
        reset()
    }
    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(save)}>
                <input placeholder={'title'} {...register('title')}/>
                <input placeholder={'body'} {...register('body')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default PostForm;