import axios from "axios";
import {baseURL, URL} from "../configs/urls";

const axiosService = axios.create({baseURL});
const axiosCarService = axios.create({baseURL:URL})

export {
    axiosService,
    axiosCarService
}