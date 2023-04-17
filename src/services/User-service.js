import {axiosService} from "./axios-service";
import {urls} from "../configs/urls";

const UserService = {
    getAll:()=> axiosService.get(urls.users),
    post:(user)=> axiosService.post(urls.users, user)
 }

 export {
    UserService
 }