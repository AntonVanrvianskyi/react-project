import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const postsService = {
    getAll:()=>axiosService.get(urls.posts),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}
const commentsService = {
    getAll:()=> axiosService.get(urls.comments)
}
const todosService = {
    getAll:()=> axiosService.get(urls.todos)
}
const albumsService = {
    getAll:()=> axiosService.get(urls.albums)
}
export {
    postsService,
    todosService,
    commentsService,
    albumsService
}