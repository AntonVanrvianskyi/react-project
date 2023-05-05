import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";

const initialState = {
    cars: [],
    trigger: false,
    updateCar: null
}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI)=>{
        try {
            const {data} = await carService.getAll()
            return data
        }catch (e) {
                thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const saveCar = createAsyncThunk(
    'carSlice/saveCar',
    async ({car},thunkAPI)=>{
        try {
            await carService.create(car)
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, thunkAPI) =>{
        try {
            await carService.updateById(id,car)

        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id},thunkAPI)=>{
        try {
            await carService.delete(id)
        }catch (e) {
                thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        CAR_FOR_UPDATE: (state, action) => {
            state.updateCar = action.payload
        }
    },
    extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.cars = action.payload
            })
            .addCase(updateCar.fulfilled, (state) => {
                state.trigger = !state.trigger;
                state.updateCar = null
            })
            .addMatcher(isFulfilled(saveCar,deleteCar), state => {
                state.trigger = !state.trigger
            })
    }

})
const {reducer: carReducer, actions} = slice;
const carAction = {
    ...actions,
    getAll,
    saveCar,
    updateCar,
    deleteCar
}
export {
    carReducer,
    carAction
}