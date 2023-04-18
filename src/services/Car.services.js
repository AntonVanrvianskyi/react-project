import {axiosCarService} from "./axios-service";
import {urls} from "../configs/urls";

const CarService = {
    getAll:()=>axiosCarService.get(urls.car),
    create:(car)=> axiosCarService.post(urls.car, car),
    delete: (id)=>axiosCarService.delete(`${urls.car}/${id}`),
    update:(id, car)=>axiosCarService.put(`${urls.car}/${id}`,car)
}
export {
    CarService
}