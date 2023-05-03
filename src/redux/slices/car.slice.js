import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars:[],
    trigger:false,
    updateCar:null
}

const slice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCars:(state, action)=>{
            state.cars = action.payload
        },
        TRIGGER:(state, action)=>{
          state.trigger = !state.trigger
        },
        CAR_FOR_UPDATE:(state, action)=>{
            state.updateCar = action.payload
        }
    }

})
const {reducer:carReducer, actions} = slice;
const carAction = {
    ...actions
}
export {
    carReducer,
    carAction
}