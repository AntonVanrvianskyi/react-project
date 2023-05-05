import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const postService ={
    getAll:()=>axiosService.get(urls.posts),
    create:(post)=>axiosService.post(urls.posts,post)
}

export {
    postService
}