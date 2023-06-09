import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:19006'   
});


export const getAllBenefactor = () => axios.get('http://127.0.0.1:8000/caambu/api/v1/benefactor/');

export const getBenefactorById = (id) => axios.get(`http://127.0.0.1:8000/caambu/api/v1/benefactor/${id}`);




export const getAllCampania = () => axios.get('http://127.0.0.1:8000/caambu/api/v1/campania/')

export const getCampaniaById = (id) => axios.get(`http://127.0.0.1:8000/caambu/api/v1/campania/${id}`);


export default api;
