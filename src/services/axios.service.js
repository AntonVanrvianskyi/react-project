import axios from "axios";
import {baseURL, carURL} from "../constants/urls";


const axiosService = axios.create({baseURL})
const carAxiosService = axios.create({baseURL:carURL})
export {
    axiosService,
    carAxiosService
}