import {axiosService} from "./axios-service";
import {urls} from "../configs/urls";

const CommentsService = {
    getAll:()=> axiosService.get(urls.comments),
    post:(comment)=> axiosService.post(urls.comments, comment)
}

export {
    CommentsService
}