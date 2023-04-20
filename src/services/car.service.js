import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const carService = {
    getAll:()=> axiosService.get(urls.cars),
    create:(car)=> axiosService.post(urls.cars, car),
    updateById:(id, car)=> axiosService.patch(`${urls.cars}/${id}`,car),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`)
}
export {
    carService
}