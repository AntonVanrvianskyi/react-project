import {axiosService} from "./axios-service";
import {baseURL, urls} from "../configs/urls";

const commentsService = {
    getAll:()=> axiosService.get(urls.comments),
    post:()=> axiosService.post(urls.comments)
}

export {
    commentsService
}