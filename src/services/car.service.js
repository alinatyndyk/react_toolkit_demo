import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:() => axiosService.get(urls.cars),
    updateBYId:(id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    create:(car)=> axiosService.post(urls.cars, car),
    deleteById: (id, car) => axiosService.delete(`${urls.cars}/${id}`, car)
}

export {
    carService
}