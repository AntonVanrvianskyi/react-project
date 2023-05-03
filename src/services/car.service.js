import {carAxiosService} from "./axios.service";
import {urls} from "../constants/urls";


const carService = {
    getAll:()=>carAxiosService.get(urls.cars),
    create:(car)=>carAxiosService.post(urls.cars, car),
    updateById:(id,car)=>carAxiosService.patch(`${urls.cars}/${id}`,car),
    delete:(id)=>carAxiosService.delete(`${urls.cars}/${id}`)

}
export {
    carService
}