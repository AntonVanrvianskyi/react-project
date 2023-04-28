import {actionTypes} from "./action.types";

export const dispatchAction = (cars)=>{
    return {type:actionTypes.SET_POST, payload:cars}
}