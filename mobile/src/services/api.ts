import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.73:3333' // endereço pegado do expo que é o nosso ip 
});

export default api