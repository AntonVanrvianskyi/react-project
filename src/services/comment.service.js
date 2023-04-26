import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class Comments {
    getAll(){
       return  axiosService.get(urls.comments)
    }
}
export const commentService = new Comments()