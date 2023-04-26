import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class Posts {
    getAll(){
        return axiosService.get(urls.posts)
    }
}
export const postService = new Posts()