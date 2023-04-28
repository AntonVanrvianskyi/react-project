import {actionTypes} from "../actions";

export const postInitialState = {
    posts:[]
}
console.log(postInitialState.posts)
export const postReducer = (state=postInitialState,action)=>{
    switch (action.type) {
        case actionTypes.SET_POST:{
            return {...state, posts: action.payload}
        }
        default:
            return state
    }

}