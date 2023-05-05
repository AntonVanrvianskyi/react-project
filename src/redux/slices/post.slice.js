import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/post.service";

const initialState = {
    posts:[],
    currentPerPage:10,
    currentPage:1,

}
const setPosts = createAsyncThunk(
    'postSlice/setPosts',
    async ()=>{
        const {data} = await postService.getAll()
        return data
    }
)
const createPost = createAsyncThunk(
    'postSlice/createPost',
    async ({post})=>{
        const {data} = await postService.create(post)
        return data
    }
)
const slice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
      setCurrentPage:(state, action)=>{
          state.currentPage = action.payload
      }
    },
    extraReducers:builder => {
        builder
            .addCase(setPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            })
    }

})

const {reducer:postReducer, actions} = slice
const postActions = {
    ...actions,
    setPosts,
    createPost
}
export {
    postReducer,
    postActions
}