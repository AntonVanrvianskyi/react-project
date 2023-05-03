import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts:[]
}

const slice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        setPosts:(state, action) =>{
            state.posts = action.payload
        }
    }
})

const {reducer:postReducer, actions} = slice
const postActions = {
    ...actions
}
export {
    postReducer,
    postActions
}