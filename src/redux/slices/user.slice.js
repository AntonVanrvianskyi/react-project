import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services/user.service";


const initialState ={
    users:[]
}

const setUsers = createAsyncThunk(
    'userSlice/setUsers',
    async ()=>{
        const {data} = await userService.getAll()
        return data
    }
)

const createUser = createAsyncThunk(
    'userSlice/createUser',
    async ({user},thunkAPI)=>{
        const {data} = await userService.create(user)
        return data
    }
)
const slice = createSlice({
    name:'userSlice',
    initialState,

    extraReducers:builder => {
        builder
            .addCase(setUsers.fulfilled,(state, action) => {
                state.users = action.payload
            })
            .addCase(createUser.fulfilled,(state, action) => {
                state.users.push(action.payload)
            })
    }
})

const {reducer:userReducer} = slice
const userActions = {
    setUsers,
    createUser
}
export {
    userReducer,
    userActions
}